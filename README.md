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
<p align="center">
WordPress Docker Start Theme — This is a starter WordPress theme that runs in a Docker environment along with MySQL and phpMyAdmin. The frontend is built using Webpack, PostCSS, and supports Tailwind CSS. The project includes two build modes (dev and prod), as well as features for font conversion and versioning for JS and CSS files.
</p>


![Текст с описанием картинки](https://raw.githubusercontent.com/GrafVishna/wordpress-docker-start-theme/b5237464a0dc554463de7eddd569c89473447407/.git-icons/img.svg)

## Features

- **Docker**:
  - Containerized development using Docker.
  - Support for MySQL and phpMyAdmin for convenient database management.

- **Webpack**:
  - Development (live server) and production modes.
  - Support for modern ES6 modules.
  - Generation of source maps for easier debugging in development mode.
  - Automatic versioning for JS and CSS files (to avoid caching).

- **PostCSS і Tailwind CSS**:
  - Flexible PostCSS configuration.
  - Integration with Tailwind CSS for rapid development of responsive design.

- Font Conversion:
  - Tool for converting fonts to .woff2 format.
  - Generation of SCSS files with @font-face rules.
  - Linking fonts in the head with rel="preload" and crossorigin="anonymous" attributes for faster loading.

## Requirements

- **Docker** and **Docker Compose**
- **Node.js** (version 20.16.0) and **npm**


## Starting work

### Docker launch:

Make sure that Docker and Docker Compose are installed on your machine. To start the entire environment, run:

(This command will raise containers for WordPress, MySQL and phpMyAdmin.)

```bash
docker-compose up -d
```
Stopping the environment.
```bash
docker-compose down --volumes
```

#### The site is accessible at the address: http://localhost:8000
#### phpMyAdmin is accessible at the address: http://localhost:8181

- MySQL
- Host: mysql:3306
- User: wordpress
- Password: wordpress
- Database: wordpress

### Development environment setup (Webpack)

Navigate to the theme folder:

```bash
cd theme
```

Install the necessary dependencies:
```bash
yarn
```

To run Webpack in development mode with automatic reloading:

The local server will be available at: http://localhost:3003
```bash
yarn dev
```

To build the project in production mode:
```bash
yarn build
```

To convert fonts to .woff2 format and generate an SCSS file with @font-face rules, as well as to link fonts in the head, use:
```bash
yarn fonts
```
