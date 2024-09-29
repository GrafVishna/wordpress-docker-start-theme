<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ale
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */

define('THEME_NAME', 'Pifagor');

define('THEME_ROOT', get_template_directory_uri());
define('IMG_DIR', THEME_ROOT . '/assets/dist/img');
define('FONTS_DIR', THEME_ROOT . '/assets/dist/fonts');
define('FILES_DIR', THEME_ROOT . '/assets/dist/files');

/*
 * Connecting the topic settings
 */
require get_template_directory() . '/include/custom-fields/custom-fields.php';
/*
 * Connection of scripts and styles
 */
require get_template_directory() . '/include/enqueue-script-style.php';
