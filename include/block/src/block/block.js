import './style.scss';
import './editor.scss';
import { VdoSVG } from './components/vdo-icon';
import { VdoEmbed } from './components/vdo-embed';
import { VdoBlockSettings } from './components/vdo-block-settings';

/* global wp */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
registerBlockType( 'vdo/block', {
  title: __( 'VdoCipher' ),
  description: __( 'Embed a VdoCipher video' ),
  icon: VdoSVG,
  category: 'embed',
  keywords: [
    __( 'vdocipher' ),
    __( 'video embed' ),
    __( 'vdo' ),
  ],
  edit: class extends Component {
    constructor( props ) {
      super( props );
      this.props = props;

      this.onIdChange = this.onIdChange.bind( this );
      this.onWidthChange = this.onWidthChange.bind( this );
      this.onHeightChange = this.onHeightChange.bind( this );
      // this.onPlayerThemeChange = this.onPlayerThemeChange.bind( this );
      // this.onPlayerVersionChange = this.onPlayerVersionChange.bind( this );

      this.state = {
        idDashicon: this.evaluateId( this.props.attributes.id ),
        widthDashicon: this.evaluateWidth( this.props.attributes.width ),
        heightDashicon: this.evaluateHeight( this.props.attributes.height ),
      };
    }

    // set video id attribute (state) of edit component
    onIdChange( id ) {
      this.props.setAttributes( { id } );
      this.setState( { idDashicon: this.evaluateId( id ) } );
    }
    // set width attribute (state) of edit component
    onWidthChange( width ) {
      this.props.setAttributes( { width } );
      this.setState( { widthDashicon: this.evaluateWidth( width ) } );
    }
    // set height attribute (state) of edit component
    onHeightChange( height ) {
      this.props.setAttributes( { height } );
      this.setState( { heightDashicon: this.evaluateHeight( height ) } );
    }
    // evaluate if video ID entered is 32-characters and characters are in range 0-9a-f
    evaluateId( id ) {
      if ( ! id ) return 0;
      return ( id.match( /^[0-9a-f]{32}$/ ) ) ? 1 : -1;
    }
    // evaluate if width value entered is valid
    evaluateWidth( width ) {
      if ( ! width ) return 0;
      return ( width.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) ? 1 : -1;
    }
    // evaluate if height value entered is valid
    evaluateHeight( height ) {
      if ( ! height ) return 0;
      return ( ( height.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) || ( height.match( /^\bauto\b$/ ) ) ) ? 1 : -1;
    }
    //
    render() {
      const { className } = this.props;
      const {
        id,
        width,
        height,
        // vdo_theme,
        // vdo_version
      } = this.props.attributes;
      return (
        <div className={ className }>
          <VdoBlockSettings
            width={ width }
            onWidthChange={ this.onWidthChange }
            widthDashicon={ this.state.widthDashicon }
            height={ height }
            onHeightChange={ this.onHeightChange }
            heightDashicon={ this.state.heightDashicon }
            // vdo_theme={ vdo_theme }
            // onPlayerThemeChange={ this.onPlayerThemeChange }
            // vdo_version={ vdo_version }
            // onPlayerVersionChange={ this.onPlayerVersionChange }
          />
          <VdoEmbed
            id={ id }
            onIdChange={ this.onIdChange }
            idDashicon={ this.state.idDashicon }
          />
        </div>
      );
    }
  },

  save( { attributes } ) {
    return null;
  },
} );
