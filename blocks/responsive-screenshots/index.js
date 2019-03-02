import "./editor.scss";
import "./style.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register block
 */
export default registerBlockType("rs-block/responsive-screenshots", {
  title: __("Responsive Screenshots", "rs-block"),
  description: __(
    "Generate a mockup with devices and responsive screenshots.",
    "rs-block"
  ),
  category: "common",
  keywords: [
    __("Responsive", "rs-block"),
    __("Screenshots", "rs-block"),
    __("Mockups", "rs-block"),
  ],
  edit: props => {

  },
  save: props => {

  }
});