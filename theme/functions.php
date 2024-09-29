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
Connecting the topic settings
*/
require get_template_directory() . '/includes/custom-fields/custom-fields.php';
/*
Connection of scripts and styles
*/
require get_template_directory() . '/includes/enqueue-script-style.php';
/*
Connection of the widget area
*/
require get_template_directory() . '/includes/widget-areas.php';
/*
 * Connection of the custom menu
 */
require get_template_directory() . '/includes/custom-menu.php';
/*
Secondary functions
*/
require get_template_directory() . '/includes/helpers.php';
/*
Functions which enhance the theme by hooking into WordPress.
*/
require get_template_directory() . '/includes/template-functions.php';
/*
Connection of the theme settings
*/
require get_template_directory() . '/includes/theme-settings.php';


/*
Load WooCommerce compatibility file.
*/
add_action('after_setup_theme', 'mytheme_add_woocommerce_support');
function mytheme_add_woocommerce_support()
{
   add_theme_support('woocommerce');
}

if (class_exists('WooCommerce')) {
   require get_template_directory() . '/woocommerce/includes/wc-functions.php';
   require get_template_directory() . '/woocommerce/includes/wc-functions-remove.php';
   require get_template_directory() . '/woocommerce/includes/checkout-functions.php';
}
