<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}


/*
 * Enqueue template assets (scripts and styles)
 */
add_action('wp_enqueue_scripts', 'enqueue_template_assets', 10);
function enqueue_template_assets()
{
	// Download the asset manifest
	$assets_manifest = include get_template_directory() . '/assets/assets-manifest.php';

	// Form a URL for JS
	$app_js = isset($assets_manifest['app.js']) ? 'app.' . $assets_manifest['app.js'] . '.js' : 'app.js';
	$script_url = get_template_directory_uri() . '/assets/dist/js/' . $app_js;

	wp_enqueue_script(
		'template_scripts',
		$script_url,
		array(),
		null,
		true
	);

	// Form a URL for CSS
	$app_css = isset($assets_manifest['app.css']) ? 'app.' . $assets_manifest['app.css'] . '.css' : 'app.css';
	$stylesheet_url = get_template_directory_uri() . '/assets/dist/css/' . $app_css;

	wp_enqueue_style(
		'template_styles',
		$stylesheet_url,
		array(),
		null,
		'all'
	);
}

/*
* Add custom admin styles
*/
add_action('admin_enqueue_scripts', 'custom_admin_styles');
function custom_admin_styles()
{
	wp_enqueue_style(
		'custom-admin-styles',
		get_template_directory_uri() . '/assets/dist/css/admin.css',
		array(),
		null,
		'all'
	);
}

/*
* Add defer/async attribute to scripts
*/
add_filter('script_loader_tag', 'add_tag_attribute', 10, 2);
function add_tag_attribute($tag, $handle)
{
	$defer_scripts = ['template_scripts'];
	$async_scripts = [];

	if (in_array($handle, $defer_scripts)) {
		return str_replace(' src', ' defer src', $tag);
	}
	if (in_array($handle, $async_scripts)) {
		return str_replace(' src', ' async src', $tag);
	}

	return $tag;
}
