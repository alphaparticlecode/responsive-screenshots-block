<?php
/*
Plugin Name: Responsive Screenshots Block
Plugin URI: https://wordpress.org/plugins/responsive-screenshots-block/
Description: A Gutenberg block to show off responsive, in-device screenshots of a website directly in the content.
Version: 1.0
Author: Alpha Particle
Author URI: https://alphaparticle.com
Text Domain: rs-block
License:     GPL-3.0+
License URI: http://www.gnu.org/licenses/gpl-3.0.txt
*/

// Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Enqueue block editor only JavaScript and CSS
 */
function rsblock_editor_scripts() {
    $blockPath = '/assets/js/editor.blocks.js';
    $editorStylePath = '/assets/css/blocks.editor.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'rsblock-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue optional editor only styles
    wp_enqueue_style(
        'rsblock-blocks-editor-css',
        plugins_url( $editorStylePath, __FILE__),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );

}

// Hook scripts function into block editor hook
add_action( 'enqueue_block_editor_assets', 'rsblock_editor_scripts' );

/**
 * Enqueue front end and editor JavaScript and CSS
 */
function rsblock_scripts()
{
    $blockPath = '/assets/js/frontend.blocks.js';
    // Make paths variables so we don't write em twice ;)
    $stylePath = '/assets/css/blocks.style.css';

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'rsblock-blocks-frontend-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-editor' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'rsblock-blocks-css',
        plugins_url($stylePath, __FILE__),
        null,
        filemtime(plugin_dir_path(__FILE__) . $stylePath )
    );

}
add_action('enqueue_block_assets', 'rsblock_scripts');