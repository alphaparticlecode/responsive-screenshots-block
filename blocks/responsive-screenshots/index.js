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
      <svg height="452" viewBox="0 0 897 452" width="897" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <g stroke="#8492a5" transform="translate(1 1)" style={{display: desktopVisible ? 'block' : 'none' }}>
            <path d="m594 0h-496c-13.49585 0-25 11.0738184-25 24.7901127v326.2378823l546-.00001v-326.2378723c-.000029-13.7172918-11.462521-24.7901127-25-24.7901127z" fill="#fefefe" stroke-width="2"/>
            <circle cx="347" cy="19" r="4" stroke-width="2"/>
            <g transform="translate(0 351)">
              <path d="m640.812 31.01h-589.524c-30.647 0-51.288-10.516-51.288-14.988v-13.594c0-1.344 1.335-2.428 2.995-2.428h686.109c1.662 0 2.999 1.084 2.999 2.428v14.129c-.007 3.535-15.991 14.453-51.291 14.453z" fill="#fdfdfd" stroke-width="2"/>
              <path d="m.5 14.5h689.742676" stroke-linecap="square"/>
            </g>
            <g fill="#fff">
              <path d="m95 39h501.073853v292.009h-501.073853z"/>
              <path d="m421 352v3.087c0 2.201-4.333281 2.865714-7.613281 2.865714h-134.571433c-3.451 0-7.815286-.663714-7.815286-2.865714v-3.087"/>
            </g>
          </g>
          <g stroke="#7e89a3" transform="translate(681 55)" style={{display: tabletVisible ? 'block' : 'none' }}>
            <path d="m202.986 317h-190.889c-6.635 0-12.014-5.377-12.014-12.01v-292.897c0-6.633 5.378-12.01 12.014-12.01h190.889c6.636 0 12.014 5.377 12.014 12.01v292.897c0 6.633-5.378 12.01-12.014 12.01z" fill="#fdfdfd" stroke-width="2"/>
            <path d="m202.986 317h-190.889c-6.635 0-12.014-5.377-12.014-12.01v-292.897c0-6.633 5.378-12.01 12.014-12.01h190.889c6.636 0 12.014 5.377 12.014 12.01v292.897c0 6.633-5.378 12.01-12.014 12.01z" fill="#fdfdfd" stroke-width="2"/>
            <path d="m17 32h181.999v252.917h-181.999z" fill="#fff"/>
            <circle cx="108.021" cy="300.021" r="8.021"/>
            <circle cx="106.99" cy="16.99" r="2.99"/>
          </g>
          <g stroke="#7e89a3" transform="translate(576 177)" style={{display: mobileVisible ? 'block' : 'none' }}>
            <path d="m130 257.964c0 8.833-7.191 15.992-16.062 15.992h-97.875c-8.871 0-16.062-7.159-16.062-15.992v-241.891c0-8.833 7.191-15.992 16.062-15.992h97.875c8.871 0 16.062 7.159 16.062 15.992z" fill="#fdfdfd" stroke-width="2"/>
            <path d="m9 36h111.93v199.084h-111.93z" fill="#fff"/>
            <path d="m77 25.746c0 .635-.439 1.147-.98 1.147h-20.102c-.542 0-.98-.513-.98-1.147v-2.58c0-.635.439-1.147.98-1.147h20.102c.541 0 .98.513.98 1.147z"/>
            <circle cx="66" cy="12" r="3"/>
            <ellipse cx="65.04" cy="254.001" rx="10.04" ry="10.001"/>
          </g>
        </g>
      </svg>
    ];
  },
  save: props => {
    return (
      <svg height="452" viewBox="0 0 897 452" width="897" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <g stroke="#8492a5" transform="translate(1 1)" style={{display: desktopVisible ? 'block' : 'none' }}>
            <path d="m594 0h-496c-13.49585 0-25 11.0738184-25 24.7901127v326.2378823l546-.00001v-326.2378723c-.000029-13.7172918-11.462521-24.7901127-25-24.7901127z" fill="#fefefe" stroke-width="2"/>
            <circle cx="347" cy="19" r="4" stroke-width="2"/>
            <g transform="translate(0 351)">
              <path d="m640.812 31.01h-589.524c-30.647 0-51.288-10.516-51.288-14.988v-13.594c0-1.344 1.335-2.428 2.995-2.428h686.109c1.662 0 2.999 1.084 2.999 2.428v14.129c-.007 3.535-15.991 14.453-51.291 14.453z" fill="#fdfdfd" stroke-width="2"/>
              <path d="m.5 14.5h689.742676" stroke-linecap="square"/>
            </g>
            <g fill="#fff">
              <path d="m95 39h501.073853v292.009h-501.073853z"/>
              <path d="m421 352v3.087c0 2.201-4.333281 2.865714-7.613281 2.865714h-134.571433c-3.451 0-7.815286-.663714-7.815286-2.865714v-3.087"/>
            </g>
          </g>
          <g stroke="#7e89a3" transform="translate(681 55)" style={{display: tabletVisible ? 'block' : 'none' }}>
            <path d="m202.986 317h-190.889c-6.635 0-12.014-5.377-12.014-12.01v-292.897c0-6.633 5.378-12.01 12.014-12.01h190.889c6.636 0 12.014 5.377 12.014 12.01v292.897c0 6.633-5.378 12.01-12.014 12.01z" fill="#fdfdfd" stroke-width="2"/>
            <path d="m202.986 317h-190.889c-6.635 0-12.014-5.377-12.014-12.01v-292.897c0-6.633 5.378-12.01 12.014-12.01h190.889c6.636 0 12.014 5.377 12.014 12.01v292.897c0 6.633-5.378 12.01-12.014 12.01z" fill="#fdfdfd" stroke-width="2"/>
            <path d="m17 32h181.999v252.917h-181.999z" fill="#fff"/>
            <circle cx="108.021" cy="300.021" r="8.021"/>
            <circle cx="106.99" cy="16.99" r="2.99"/>
          </g>
          <g stroke="#7e89a3" transform="translate(576 177)" style={{display: mobileVisible ? 'block' : 'none' }}>
            <path d="m130 257.964c0 8.833-7.191 15.992-16.062 15.992h-97.875c-8.871 0-16.062-7.159-16.062-15.992v-241.891c0-8.833 7.191-15.992 16.062-15.992h97.875c8.871 0 16.062 7.159 16.062 15.992z" fill="#fdfdfd" stroke-width="2"/>
            <path d="m9 36h111.93v199.084h-111.93z" fill="#fff"/>
            <path d="m77 25.746c0 .635-.439 1.147-.98 1.147h-20.102c-.542 0-.98-.513-.98-1.147v-2.58c0-.635.439-1.147.98-1.147h20.102c.541 0 .98.513.98 1.147z"/>
            <circle cx="66" cy="12" r="3"/>
            <ellipse cx="65.04" cy="254.001" rx="10.04" ry="10.001"/>
          </g>
        </g>
      </svg>
    );
  }
});