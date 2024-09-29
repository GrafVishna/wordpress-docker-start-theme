<?php
defined('ABSPATH') || exit;

if (function_exists('acf_add_options_page')) {

   acf_add_options_page(array(
      'page_title' => 'Налаштування домашньої сторінки',
      'menu_title' => 'Домашня стор...',
      'menu_slug'  => 'home-settings',
      'capability' => 'edit_posts',
      'position'   => 3,
      'icon_url'   => 'dashicons-admin-home',
      'redirect'   => false
   ));
}
