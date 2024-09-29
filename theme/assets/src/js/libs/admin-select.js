import { _slideUp, _slideDown, _slideToggle } from "../scripts/functions.js"

/*

Для селекту (select):
data-show-selected - вимикає приховування вибраного елемента
data-submit - відправляє форму при зміні селекту

Для плейсхолдера (Плейсхолдер – це option з value=""):
data-label для плейсхолдера, додає label до селекту
data-show для плейсхолдера, показує його у списку (тільки для одиничного вибору)
*/


// Клас побудови Select
class SelectConstructor {
   constructor(props, data = null) {
      let defaultConfig = {
         init: true,
         logging: true,
         speed: 150
      }
      this.config = Object.assign(defaultConfig, props)
      // CSS класи модуля
      this.selectClasses = {
         classSelect: "select", // Головний блок
         classSelectBody: "select__body", // Тіло селекту
         classSelectTitle: "select__title", // Заголовок
         classSelectValue: "select__value", // Значення у заголовку
         classSelectLabel: "select__label", // Лабел
         classSelectInput: "select__input", // Поле введення
         classSelectText: "select__text", // Оболонка текстових даних
         classSelectLink: "select__link", // Посилання в елементі
         classSelectOptions: "select__options", // Випадаючий список
         classSelectOptionsScroll: "select__scroll", // Оболонка при скролі
         classSelectOption: "select__option", // Пункт
         classSelectContent: "select__content", // Оболонка контенту в заголовку
         classSelectRow: "select__row", // Ряд
         classSelectData: "select__asset", // Додаткові дані
         classSelectDisabled: "_select-disabled", // Заборонено
         classSelectTag: "_select-tag", // Клас тега
         classSelectOpen: "_select-open", // Список відкритий
         classSelectActive: "_select-active", // Список вибрано
         classSelectFocus: "_select-focus", // Список у фокусі
         classSelectMultiple: "_select-multiple", // Мультивибір
         classSelectCheckBox: "_select-checkbox", // Стиль чекбоксу
         classSelectOptionSelected: "_select-selected", // Вибраний пункт
         classSelectPseudoLabel: "_select-pseudo-label", // Псевдолейбл
      }
      this._this = this
      // Запуск ініціалізації
      if (this.config.init) {
         // Отримання всіх select на сторінці
         const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll('.icon_select select')
         if (selectItems.length) {
            this.selectsInit(selectItems)
         }
      }
   }

   // Конструктор CSS класу
   getSelectClass(className) {
      return `.${className}`
   }
   // Геттер елементів псевдоселекту
   getSelectElement(selectItem, className) {
      return {
         originalSelect: selectItem.querySelector('select'),
         selectElement: selectItem.querySelector(this.getSelectClass(className)),
      }
   }
   // Функція ініціалізації всіх селектів
   selectsInit(selectItems) {
      selectItems.forEach((originalSelect, index) => {
         this.selectInit(originalSelect, index + 1)
      })
      // Обробники подій...
      // ...при кліку
      document.addEventListener('click', function (e) {
         this.selectsActions(e)
      }.bind(this))
      // ...при натисканні клавіші
      document.addEventListener('keydown', function (e) {
         this.selectsActions(e)
      }.bind(this))
      // ...при фокусі
      document.addEventListener('focusin', function (e) {
         this.selectsActions(e)
      }.bind(this))
      // ...при втраті фокусу
      document.addEventListener('focusout', function (e) {
         this.selectsActions(e)
      }.bind(this))
   }
   // Функція ініціалізації конкретного селекту
   selectInit(originalSelect, index) {
      const _this = this
      // Створюємо оболонку
      let selectItem = document.createElement("div")
      selectItem.classList.add(this.selectClasses.classSelect)
      // Виводимо оболонку перед оригінальним селектом
      originalSelect.parentNode.insertBefore(selectItem, originalSelect)

      // Приховуємо оригінальний селект
      originalSelect.hidden = true
      // Привласнюємо унікальний ID
      index ? originalSelect.dataset.id = index : null

      if (originalSelect.hasAttribute('data-select-countries')) {
         selectItem.classList.add('select-countries')
      }

      // Поміщаємо оригінальний селект в оболонку
      selectItem.appendChild(originalSelect)

      // Робота з плейсхолдером
      if (this.getSelectPlaceholder(originalSelect)) {
         // Запам'ятовуємо плейсхолдер
         originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value
         // Якщо увімкнено режим label
         if (this.getSelectPlaceholder(originalSelect).label.show) {
            const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement
            selectItemTitle.insertAdjacentHTML('afterbegin', `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`)
         }
      }
      // Конструктор основних елементів
      selectItem.insertAdjacentHTML('beforeend', `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`)
      // Запускаємо конструктор псевдоселекту
      this.selectBuild(originalSelect)

      // Запам'ятовуємо швидкість
      originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed
      this.config.speed = +originalSelect.dataset.speed

      // Подія при зміні оригінального select
      originalSelect.addEventListener('change', function (e) {
         _this.selectChange(e)
      })
   }
   // Конструктор псевдоселекту
   selectBuild(originalSelect) {
      const selectItem = originalSelect.parentElement
      // Додаємо ID селекту
      selectItem.dataset.id = originalSelect.dataset.id
      // Отримуємо клас оригінального селекту, створюємо модифікатор та додаємо його
      originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null
      // Сеттер значення заголовка селекту
      this.setSelectTitleValue(selectItem, originalSelect)
      // Сеттер елементів списку (options)
      this.setOptions(selectItem, originalSelect)
      // Обробник disabled
      this.selectDisabled(selectItem, originalSelect)
   }
   // Функція реакцій на події
   selectsActions(e) {
      const targetElement = e.target
      const targetType = e.type
      if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
         const selectItem = targetElement.closest('.select') ? targetElement.closest('.select') : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`)
         const originalSelect = this.getSelectElement(selectItem).originalSelect
         if (targetType === 'click') {
            if (!originalSelect.disabled) {
               if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                  // Обробка кліка на тег
                  const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))
                  const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`)
                  this.optionAction(selectItem, originalSelect, optionItem)
               } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) {
                  // Обробка кліка на заголовок селекту
                  this.selectAction(selectItem)
               } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                  // Обробка кліка на елемент селекту
                  const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))
                  this.optionAction(selectItem, originalSelect, optionItem)
               }
            }
         } else if (targetType === 'focusin' || targetType === 'focusout') {
            if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) {
               targetType === 'focusin' ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus)
            }
         } else if (targetType === 'keydown' && e.code === 'Escape') {
            this.selectsСlose()
         }
      } else {
         this.selectsСlose()
      }
   }
   // Функція закриття всіх селектів
   selectsСlose(selectOneGroup) {
      const selectsGroup = selectOneGroup ? selectOneGroup : document
      const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`)
      if (selectActiveItems.length) {
         selectActiveItems.forEach(selectActiveItem => {
            this.selectСlose(selectActiveItem)
         })
      }
   }
   // Функція закриття конкретного селекту
   selectСlose(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement
      if (!selectOptions.classList.contains('_slide')) {
         selectItem.classList.remove(this.selectClasses.classSelectOpen)
         _slideUp(selectOptions, originalSelect.dataset.speed)
         setTimeout(() => {
            selectItem.style.zIndex = ''
         }, originalSelect.dataset.speed)
      }
   }
   // Функція відкриття/закриття конкретного селекту
   selectAction(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement
      const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3

      // Визначаємо, де видобразити випадаючий список
      this.setOptionsPosition(selectItem)

      // Якщо селективи розміщені в елементі з дата атрибутом data-one-select
      // закриваємо усі відкриті селекти
      if (originalSelect.closest('[data-one-select]')) {
         const selectOneGroup = originalSelect.closest('[data-one-select]')
         this.selectsСlose(selectOneGroup)
      }

      setTimeout(() => {
         if (!selectOptions.classList.contains('_slide')) {
            selectItem.classList.toggle(this.selectClasses.classSelectOpen)
            _slideToggle(selectOptions, originalSelect.dataset.speed)

            if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
               selectItem.style.zIndex = selectOpenzIndex
            } else {
               setTimeout(() => {
                  selectItem.style.zIndex = ''
               }, originalSelect.dataset.speed)
            }
         }
      }, 0)
   }
   // Сеттер значення заголовка селекту
   setSelectTitleValue(selectItem, originalSelect) {
      const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement
      const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement
      if (selectItemTitle) selectItemTitle.remove()
      selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect))
   }
   // Конструктор значення заголовка
   getSelectTitleValue(selectItem, originalSelect) {
      const flagSlug = this.getSelectedOptionsData(originalSelect).elements.map(option => option.dataset.flag)
      // Отримуємо вибрані текстові значення
      let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html
      // Значення або плейсхолдер
      selectTitleValue = selectTitleValue.length ? selectTitleValue : (originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : '')
      // Якщо є значення, додаємо клас
      this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive)
      // Якщо вибрано елемент зі своїм класом
      const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : ''
      // Виводимо текстове значення
      return `
      <button type="button" class="${this.selectClasses.classSelectTitle}">
         <span class="${this.selectClasses.classSelectValue}">
            ${originalSelect.hasAttribute('data-select-countries') ? `<span class="select__flag-icon fi fi-${flagSlug}"></span>` : ''}
            <i class="${selectTitleValue} ${this.selectClasses.classSelectContent}${customClass}"></i>
         </span>
      </button>
   `
   }
   // Конструктор даних для значення заголовка
   getSelectElementContent(selectOption) {
      // Якщо для елемента вказано виведення картинки чи тексту, перебудовуємо конструкцію
      const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : ''
      const selectOptionDataHTML = selectOptionData.indexOf('img') >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData
      let selectOptionContentHTML = ``
      selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : ''
      selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : ''
      selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : ''
      selectOptionContentHTML += selectOptionData ? `</span>` : ''
      selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : ''
      selectOptionContentHTML += selectOption.textContent
      selectOptionContentHTML += selectOptionData ? `</span>` : ''
      selectOptionContentHTML += selectOptionData ? `</span>` : ''
      return selectOptionContentHTML
   }
   // Отримання даних плейсхолдера
   getSelectPlaceholder(originalSelect) {
      const selectPlaceholder = Array.from(originalSelect.options).find(option => !option.value)
      if (selectPlaceholder) {
         return {
            value: selectPlaceholder.textContent,
            show: selectPlaceholder.hasAttribute("data-show"),
            label: {
               show: selectPlaceholder.hasAttribute("data-label"),
               text: selectPlaceholder.dataset.label
            }
         }
      }
   }
   // Отримання даних із вибраних елементів
   getSelectedOptionsData(originalSelect, type) {
      //Отримуємо всі вибрані об'єкти з select
      let selectedOptions = []
      selectedOptions.push(originalSelect.options[originalSelect.selectedIndex])
      return {
         elements: selectedOptions.map(option => option),
         values: selectedOptions.filter(option => option.value).map(option => option.value),
         html: selectedOptions.map(option => this.getSelectElementContent(option))
      }
   }
   // Конструктор елементів списку
   getOptions(originalSelect) {
      // Налаштування скролла елементів
      const selectOptionsScroll = originalSelect.hasAttribute('data-scroll') ? `data-simplebar` : ''
      const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null
      // Отримуємо елементи списку
      let selectOptions = Array.from(originalSelect.options)
      if (selectOptions.length > 0) {
         let selectOptionsHTML = ``
         // Якщо вказано налаштування data-show, показуємо плейсхолдер у списку
         if ((this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show)) {
            selectOptions = selectOptions.filter(option => option.value)
         }
         // Будуємо та виводимо основну конструкцію
         selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ''} class="${this.selectClasses.classSelectOptionsScroll}">`
         selectOptions.forEach(selectOption => {
            // Отримуємо конструкцію конкретного елемента списку
            selectOptionsHTML += this.getOption(selectOption, originalSelect)
         })
         selectOptionsHTML += `</div>`
         return selectOptionsHTML
      }
   }
   // Конструктор конкретного елемента списку
   getOption(selectOption, originalSelect) {
      const {
         classSelectOption,
         classSelectOptionSelected
      } = this.selectClasses
      const {
         selected,
         value,
         dataset: { class: optionClass, flag: optionFlag }
      } = selectOption

      const selectOptionSelected = selected ? ` ${classSelectOptionSelected}` : ''
      const selectOptionHide = selected && !originalSelect.hasAttribute('data-show-selected') ? 'hidden' : ''
      const selectOptionClass = optionClass ? ` ${optionClass}` : ''

      const content = this.getSelectElementContent(selectOption)

      const commonAttributes = `
         ${selectOptionHide}
         data-value="${value}"
         class="${classSelectOption}${selectOptionClass}${selectOptionSelected}"
      `.trim()

      const buttonTag = `
         <button ${commonAttributes} type="button">
            <i class="${content}"></i>
         </button>
      `

      return buttonTag
   }

   // Сеттер елементів списку (options)
   setOptions(selectItem, originalSelect) {
      // Отримуємо об'єкт тіла псевдоселекту
      const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement
      // Запускаємо конструктор елементів списку (options) та додаємо в тіло псевдоселекту
      selectItemOptions.innerHTML = this.getOptions(originalSelect)
   }
   // Визначаємо, де видобразити випадаючий список
   setOptionsPosition(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement
      const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement
      const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``
      const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10

      if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
         selectOptions.hidden = false
         const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue('max-height'))
         const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight
         const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight
         selectOptions.hidden = true

         const selectItemHeight = selectItem.offsetHeight
         const selectItemPos = selectItem.getBoundingClientRect().top
         const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight
         const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin)

         if (selectItemResult < 0) {
            const newMaxHeightValue = selectOptionsHeight + selectItemResult
            if (newMaxHeightValue < 100) {
               selectItem.classList.add('select--show-top')
               selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue
            } else {
               selectItem.classList.remove('select--show-top')
               selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`
            }
         }
      } else {
         setTimeout(() => {
            selectItem.classList.remove('select--show-top')
            selectItemScroll.style.maxHeight = customMaxHeightValue
         }, +originalSelect.dataset.speed)
      }
   }
   // Обробник кліку на пункт списку
   optionAction(selectItem, originalSelect, optionItem) {
      const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`)
      if (!selectOptions.classList.contains('_slide')) {
         // Якщо не вказано налаштування data-show-selected, приховуємо вибраний елемент
         if (!originalSelect.hasAttribute('data-show-selected')) {
            setTimeout(() => {
               // Спочатку все показати
               if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) {
                  selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false
               }
               // Приховуємо вибрану
               optionItem.hidden = true
            }, this.config.speed)
         }
         originalSelect.value = optionItem.hasAttribute('data-value') ? optionItem.dataset.value : optionItem.textContent
         this.selectAction(selectItem)
         //Оновлюємо заголовок селекту
         this.setSelectTitleValue(selectItem, originalSelect)
         // Викликаємо реакцію на зміну селекту
         this.setSelectChange(originalSelect)
      }
   }
   // Реакція на зміну оригінального select
   selectChange(e) {
      const originalSelect = e.target
      this.selectBuild(originalSelect)
      this.setSelectChange(originalSelect)
   }
   // Обробник зміни у селекті
   setSelectChange(originalSelect) {
      // При зміні селекту надсилаємо форму
      if (originalSelect.hasAttribute('data-submit') && originalSelect.value) {
         let tempButton = document.createElement("button")
         tempButton.type = "submit"
         originalSelect.closest('form').append(tempButton)
         tempButton.click()
         tempButton.remove()
      }
      const selectItem = originalSelect.parentElement
      // Виклик коллбек функції
      this.selectCallback(selectItem, originalSelect)
   }
   // Обробник disabled
   selectDisabled(selectItem, originalSelect) {
      if (originalSelect.disabled) {
         selectItem.classList.add(this.selectClasses.classSelectDisabled)
         this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true
      } else {
         selectItem.classList.remove(this.selectClasses.classSelectDisabled)
         this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false
      }
   }
   // Обробник пошуку за елементами списку
   searchActions(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement
      const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement
      const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `)
      const _this = this
      selectInput.addEventListener("input", function () {
         selectOptionsItems.forEach(selectOptionsItem => {
            if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) {
               selectOptionsItem.hidden = false
            } else {
               selectOptionsItem.hidden = true
            }
         })
         // Якщо список закритий відкриваємо
         selectOptions.hidden === true ? _this.selectAction(selectItem) : null
      })
   }
   // Коллбек функція
   selectCallback(selectItem, originalSelect) {
      document.dispatchEvent(new CustomEvent("selectCallback", {
         detail: {
            select: originalSelect
         }
      }))
   }
}
// Запускаємо та додаємо в об'єкт модулів
const newSelect = new SelectConstructor({})



//========================================================================================================================================================


