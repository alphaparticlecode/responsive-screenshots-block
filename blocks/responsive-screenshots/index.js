import "./editor.scss";
import "./style.scss";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
  registerBlockType
} = wp.blocks;

const {
  InspectorControls,
} = wp.editor

const {
  PanelBody,
  PanelRow,
  FormToggle,
} = wp.components ;

const { Fragment } = wp.element;

const { RichText } = wp.editor;

/**
 * Example of a custom SVG path taken from fontastic
*/
const iconEl = wp.element.createElement('svg', { width: 20, height: 20 },
  wp.element.createElement('path', { d: "M17.5,9.69V1.56a.31.31,0,0,0-.31-.31H1.56a.31.31,0,0,0-.31.31V9.69a.31.31,0,0,0,.31.31H17.19a.31.31,0,0,0,.31-.31Zm1.25-8.13V12.19a1.57,1.57,0,0,1-1.56,1.56H11.88a2.18,2.18,0,0,0,.15.76c.11.26.21.49.31.69a1.06,1.06,0,0,1,.16.42.58.58,0,0,1-.19.44.57.57,0,0,1-.43.19h-5a.65.65,0,0,1-.63-.63,1,1,0,0,1,.16-.42c.1-.2.2-.43.31-.69a2.12,2.12,0,0,0,.16-.76H1.56a1.47,1.47,0,0,1-1.1-.46A1.47,1.47,0,0,1,0,12.19V1.56A1.47,1.47,0,0,1,.46.46,1.47,1.47,0,0,1,1.56,0H17.19a1.47,1.47,0,0,1,1.1.46A1.47,1.47,0,0,1,18.75,1.56Z" } )
);

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
  icon: iconEl,
  keywords: [
    __("Responsive", "rs-block"),
    __("Screenshots", "rs-block"),
    __("Mockups", "rs-block"),
  ],
  attributes: {
    desktopVisible: {
      type: 'boolean',
      default: true
    },
    tabletVisible: {
      type: 'boolean',
      default: true
    },
    mobileVisible: {
      type: 'boolean',
      default: true
    }
  },
  edit: props => {
    const { attributes: { desktopVisible, tabletVisible, mobileVisible },
                className, setAttributes } = props;

    const toggleDesktopVisible = () => setAttributes( { desktopVisible: ! desktopVisible } );
    const toggleTabletVisible = () => setAttributes( { tabletVisible: ! tabletVisible } );
    const toggleMobileVisible = () => setAttributes( { mobileVisible: ! mobileVisible } );

    return [
      <Fragment>
        <InspectorControls>
          <PanelBody 
            title={ __('Display Settings', 'rs-block') }
          >
            <PanelRow>
              <label
                  htmlFor="desktop-form-toggle"
              >
                  { __( 'Desktop Visible', 'rs-block' ) }
              </label>
              <FormToggle
                  id="desktop-form-toggle"
                  label={ __( 'Desktop Visible', 'rs-block' ) }
                  checked={ desktopVisible }
                  onChange={ toggleDesktopVisible }
              />
            </PanelRow>
            <PanelRow>
              <label
                  htmlFor="tablet-form-toggle"
              >
                  { __( 'Tablet Visible', 'rs-block' ) }
              </label>
              <FormToggle
                  id="tablet-form-toggle"
                  label={ __( 'Tablet Visible', 'rs-block' ) }
                  checked={ tabletVisible }
                  onChange={ toggleTabletVisible }
              />
            </PanelRow>
            <PanelRow>
              <label
                  htmlFor="mobile-form-toggle"
              >
                  { __( 'Mobile Visible', 'rs-block' ) }
              </label>
              <FormToggle
                  id="mobile-form-toggle"
                  label={ __( 'Mobile Visible', 'rs-block' ) }
                  checked={ mobileVisible }
                  onChange={ toggleMobileVisible }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </Fragment>,
      <p>Test123</p>
    ];
  },
  save: props => {
    return (
      <p>Test123</p>
    );
  }
});