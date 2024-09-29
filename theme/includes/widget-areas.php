<?php

defined('ABSPATH') || exit;

function register_menus()
{
   register_nav_menus(
      array(
         'main_menu' => __('Main menu'),
      )
   );
}
add_action('init', 'register_menus');
