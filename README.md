<div style="align="center"">
  <span>
    <img src="https://raw.githubusercontent.com/GrafVishna/wordpress-docker-start-theme/5b41ae938ba97bcba066036aa3d3a4e45ff69733/.git-icons/wordpress.svg" alt="wordpress" height="30"/>
  </span>
  <span>
    <img src="https://raw.githubusercontent.com/GrafVishna/wordpress-docker-start-theme/3a2c1e5e792f8baaaf13cf6d7c230f2408752323/.git-icons/docker.svg" alt="wordpress" height="30"/>
  </span>
  <span>
    <img src="https://raw.githubusercontent.com/GrafVishna/wordpress-docker-start-theme/3a2c1e5e792f8baaaf13cf6d7c230f2408752323/.git-icons/tailwind.svg" alt="tailwind" height="42"/> 
  </span>
  <span>
    <img src="https://raw.githubusercontent.com/GrafVishna/wordpress-docker-start-theme/3a2c1e5e792f8baaaf13cf6d7c230f2408752323/.git-icons/sass.svg" alt="sass" height="30"/>
  </span>
  <span>
    <img src="https://raw.githubusercontent.com/GrafVishna/wordpress-docker-start-theme/3a2c1e5e792f8baaaf13cf6d7c230f2408752323/.git-icons/webpack.svg" alt="webpack" height="30"/>
  </span>
</div>

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
