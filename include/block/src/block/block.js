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
        IdDashicon: ! this.props.attributes.id ? null : this.evaluateId( this.props.attributes.id ),
        WidthDashicon: ! this.props.attributes.width ? null : this.evaluateWidth( this.props.attributes.width ),
        HeightDashicon: ! this.props.attributes.height ? null : this.evaluateHeight( this.props.attributes.height ),
      };
    }

    // set video id attribute (state) of edit component
    onIdChange( id ) {
      this.props.setAttributes( { id } );
      this.setState( { IdDashicon: this.evaluateId( id ) } );
    }
    // set width attribute (state) of edit component
    onWidthChange( width ) {
      this.props.setAttributes( { width } );
      this.setState( { WidthDashicon: this.evaluateWidth( width ) } );
    }
    // set height attribute (state) of edit component
    onHeightChange( height ) {
      this.props.setAttributes( { height } );
      this.setState( { HeightDashicon: this.evaluateHeight( height ) } );
    }
    // evaluate if video ID entered is 32-characters and characters are in range 0-9a-f
    evaluateId( id ) {
      if ( id.match( /^[0-9a-f]{32}$/ ) ) return 1;
      else if ( id.length > 0 && ! id.match( /^[0-9a-f]{32}$/ ) ) return -1;
    }
    // evaluate if width value entered is valid
    evaluateWidth( width ) {
      if ( width.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) return 1;
      else if ( width.length > 0 && ! width.match( /^[1-9][0-9]{0,3}(px)?$/ ) ) return -1;
    }
    // evaluate if height value entered is valid
    evaluateHeight( height ) {
      if ( ( height.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) || ( height.match( /^\bauto\b$/ ) ) ) return 1;
      else if ( height.length > 0 &&
        ! ( ( height.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) || ( height.match( /^\bauto\b$/ ) ) ) ) {
        return -1;
      }
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
            WidthDashicon={ this.state.WidthDashicon }
            height={ height }
            onHeightChange={ this.onHeightChange }
            HeightDashicon={ this.state.HeightDashicon }
            // vdo_theme={ vdo_theme }
            // onPlayerThemeChange={ this.onPlayerThemeChange }
            // vdo_version={ vdo_version }
            // onPlayerVersionChange={ this.onPlayerVersionChange }
          />
          <VdoEmbed
            id={ id }
            onIdChange={ this.onIdChange }
            IdDashicon={ this.state.IdDashicon }
          />
        </div>
      );
    }
  },

  save( { attributes } ) {
    return null;
  },
} );
