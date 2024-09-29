<?php

defined('ABSPATH') || exit;

/**
 * Отримати користувацькі елементи меню.
 *
 * @param array $args Аргументи для конфігурації меню.
 * @return string|array HTML меню або масив елементів меню.
 */
function get_custom_menu_items($args = array())
{
   $defaults = array(
      'is_template' => true,
      'locations' => array(),
      'container' => '',
      'container_class' => ''
   );

   $args = wp_parse_args($args, $defaults);

   // Checking the availability of places and functions.
   if (empty($args['locations']) || !function_exists('get_nav_menu_locations') || !function_exists('wp_get_nav_menu_items')) {
      return '';
   }

   $combined_menu_items = array();
   $locations = get_nav_menu_locations();
   $current_url = home_url(add_query_arg(array(), $_SERVER['REQUEST_URI']));

   foreach ($args['locations'] as $menu_name) {
      if (isset($locations[$menu_name])) {
         $menu_id = $locations[$menu_name];
         $items = wp_get_nav_menu_items($menu_id);

         if ($items) {
            $menu_items = array();

            foreach ($items as $item) {
               $item->is_current = ($current_url == esc_url($item->url));

               if ($item->menu_item_parent) {
                  if (!isset($menu_items[$item->menu_item_parent]->children)) {
                     $menu_items[$item->menu_item_parent]->children = array();
                  }
                  $menu_items[$item->menu_item_parent]->children[$item->ID] = $item;
               } else {
                  $combined_menu_items[$item->ID] = $item;
               }

               $menu_items[$item->ID] = $item;
            }
         }
      }
   }

   // If we have to return the HTML scaplon
   if ($args['is_template']) {
      $menu_html = '<ul class="menu-list">';
      $menu_html .= build_menu_html($combined_menu_items);
      $menu_html .= '</ul>';

      if (!empty($args['container'])) {
         return sprintf(
            '<%1$s class="%2$s">%3$s</%1$s>',
            esc_attr($args['container']),
            esc_attr($args['container_class']),
            $menu_html
         );
      }

      return $menu_html;
   } else {
      // Повертаємо масив елементів меню
      return $combined_menu_items;
   }
}

/**
 * Створити HTML для меню.
 *
 * @param array $items Масив елементів меню.
 * @return string HTML код меню.
 */
function build_menu_html($items)
{
   $html = '';

   foreach ($items as $item) {
      $html .= '<li class="menu-item ' . esc_attr($item->is_current ? 'current-menu-item' : '') . '">';
      $html .= '<a href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a>';
      if (!empty($item->children)) {
         $html .= '<ul class="sub-menu">';
         $html .= build_menu_html($item->children);
         $html .= '</ul>';
      }

      $html .= '</li>';
   }

   return $html;
}
