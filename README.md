<div align="center">
  
  ![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  
</div>

---

<h1 align="center">WordPress Docker Start Theme</h1>

## Опис

**WordPress Docker Start Theme** — це стартова тема WordPress, яка працює в середовищі Docker разом з MySQL та phpMyAdmin. Фронтенд збирається за допомогою Webpack, PostCSS, та підтримує Tailwind CSS. Проєкт включає два режими збірки (dev і prod), а також має функції для конвертації шрифтів та встановлення версій для файлів JS і CSS.

## Особливості

- **Docker**:
  - Контейнеризована розробка за допомогою Docker.
  - Підтримка MySQL і phpMyAdmin для зручного управління базами даних.
  
- **Webpack**:
  - Режими розробки (live server) та продакшн.
  - Підтримка сучасних ES6 модулів.
  - Генерація source maps для зручної відладки в режимі розробки.
  - Автоматичне встановлення версій для файлів JS і CSS (для уникнення кешування).

- **PostCSS і Tailwind CSS**:
  - Гнучка конфігурація PostCSS.
  - Інтеграція з Tailwind CSS для швидкої розробки адаптивного дизайну.

- **Конвертація шрифтів**:
  - Інструмент для конвертації шрифтів у формат `.woff2`.
  - Генерація SCSS-файлів з правилами `@font-face`.
  - Підключення шрифтів в head з атрибутами `rel="preload"` та `crossorigin="anonymous"` для швидкого завантаження.

## Вимоги

- **Docker** та **Docker Compose**
- **Node.js** (версія 20.16.0) та **npm**


## Початок роботи

### Запуск Docker:

Переконайтесь, що Docker та Docker Compose встановлені на вашій машині. Для запуску всього середовища, виконайте:

(Ця команда підніме контейнери для WordPress, MySQL та phpMyAdmin.)

```bash
docker-compose up -d
```
Зупинка середовища
```bash
docker-compose down --volumes
```

#### Сайт доступний за адресою: http://localhost:8000
#### phpMyAdmin доступний за адресою: http://localhost:8181

- MySQL
- Host: mysql:3306
- User: wordpress
- Password: wordpress
- Database: wordpress

### Налаштування середовища розробки (Webpack)

Перейдіть в папку теми:

```bash
cd theme
```

Встановіть необхідні залежності:
```bash
yarn
```

Для запуску Webpack у режимі розробки з автоматичним перезавантаженням:

Локальний сервер стане доступний за адресою: http://localhost:3003
```bash
yarn dev
```

Для збірки проєкту у продакшн-режимі:
```bash
yarn build
```

Для конвертації шрифтів у формат .woff2 та генерації SCSS-файлу з правилами @font-face та підключення шрифтів в head, використовуйте:
```bash
yarn fonts
```
