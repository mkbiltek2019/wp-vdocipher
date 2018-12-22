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

      this.onIDChange = this.onIDChange.bind( this );
      this.onWidthChange = this.onWidthChange.bind( this );
      this.onHeightChange = this.onHeightChange.bind( this );
      // this.onPlayerThemeChange = this.onPlayerThemeChange.bind( this );
      // this.onPlayerVersionChange = this.onPlayerVersionChange.bind( this );

      this.state = {
        showYesDashiconId: this.evaluateValidId( this.props.attributes.id ),
        showNoDashiconId: this.evaluateInvalidId( this.props.attributes.id ),
        showYesDashiconWidth: this.evaluateValidWidth( this.props.attributes.width ),
        showNoDashiconWidth: this.evaluateInvalidWidth( this.props.attributes.width ),
        showYesDashiconHeight: this.evaluateValidHeight( this.props.attributes.height ),
        showNoDashiconHeight: this.evaluateInvalidHeight( this.props.attributes.height ),
      };
    }

    // set video id attribute (state) of edit component
    onIDChange( id ) {
      this.props.setAttributes( { id } );
      this.setState( { showYesDashiconId: this.evaluateValidId( id ) } );
      this.setState( { showNoDashiconId: this.evaluateInvalidId( id ) } );
    }
    // set width attribute (state) of edit component
    onWidthChange( width ) {
      this.props.setAttributes( { width } );
      this.setState( { showYesDashiconWidth: this.evaluateValidWidth( width ) } );
      this.setState( { showNoDashiconWidth: this.evaluateInvalidWidth( width ) } );
    }
    // set height attribute (state) of edit component
    onHeightChange( height ) {
      this.props.setAttributes( { height } );
      this.setState( { showYesDashiconHeight: this.evaluateValidHeight( height ) } );
      this.setState( { showNoDashiconHeight: this.evaluateInvalidHeight( height ) } );
    }
    /*
    // set player theme attribute (state) of edit component
    onPlayerThemeChange( vdo_theme ) {
      this.props.setAttributes( { vdo_theme } );
    }
    // set player version attribute (state) of edit component
    onPlayerVersionChange( vdo_version ) {
      this.props.setAttributes( { vdo_version } );
    }
    */
    // evaluate if video ID entered is 32-characters and characters are in range 0-9a-f
    evaluateValidId( id ) {
      if ( id.match( /^[0-9a-f]{32}$/ ) ) return true;
    }
    // evaluate if video ID entered is incorrect
    evaluateInvalidId( id ) {
      if ( id.length > 0 && ! id.match( /^[0-9a-f]{32}$/ ) ) return true;
    }
    //
    evaluateValidWidth( width ) {
      if ( width.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) return true;
    }
    //
    evaluateInvalidWidth( width ) {
      if ( width.length > 0 && ! width.match( /^[1-9][0-9]{0,3}(px)?$/ ) ) return true;
    }
    //
    evaluateValidHeight( height ) {
      if ( ( height.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) || ( height.match( /^\bauto\b$/ ) ) ) return true;
    }
    //
    evaluateInvalidHeight( height ) {
      if ( height.length > 0 &&
        ! ( ( height.match( /^[1-9][0-9]{1,3}(px)?$/ ) ) || ( height.match( /^\bauto\b$/ ) ) ) ) {
        return true;
      }
    }
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
            showYesDashiconWidth={ this.state.showYesDashiconWidth }
            showNoDashiconWidth={ this.state.showNoDashiconWidth }
            height={ height }
            onHeightChange={ this.onHeightChange }
            showYesDashiconHeight={ this.state.showYesDashiconHeight }
            showNoDashiconHeight={ this.state.showNoDashiconHeight }
            // vdo_theme={ vdo_theme }
            // onPlayerThemeChange={ this.onPlayerThemeChange }
            // vdo_version={ vdo_version }
            // onPlayerVersionChange={ this.onPlayerVersionChange }
          />
          <VdoEmbed
            id={ id }
            onIDChange={ this.onIDChange }
            showYesDashiconId={ this.state.showYesDashiconId }
            showNoDashiconId={ this.state.showNoDashiconId }
          />
        </div>
      );
    }
  },

  save( { attributes } ) {
    return null;
  },
} );
