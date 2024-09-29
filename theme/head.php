<?php

/*
* Head
*/

defined('ABSPATH') || exit;
?>

<head>
   <meta charset="<?php bloginfo('charset'); ?>">
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />

   <link rel="apple-touch-icon" sizes="180x180" href="<?php echo FILES_DIR ?>/favicons/apple-touch-icon.png">
   <link rel="icon" type="image/png" sizes="32x32" href="<?php echo FILES_DIR ?>/favicons/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="<?php echo FILES_DIR ?>/favicons/favicon-16x16.png">
   <link rel="manifest" href="<?php echo FILES_DIR ?>/favicons/site.webmanifest">
   <link rel="mask-icon" href="<?php echo FILES_DIR ?>/favicons/safari-pinned-tab.svg" color="#5bbad5">
   <meta name="msapplication-TileColor" content="#2b5797">
   <meta name="theme-color" content="#ffffff">

   <?php get_template_part('fonts-preload'); ?>

   <link rel="profile" href="http://gmpg.org/xfn/11">

   <?php wp_head(); ?>
</head>