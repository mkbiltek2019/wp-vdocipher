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
  title: __( 'VdoCipher Embed video' ),
  description: __( 'Embed videos from your VdoCipher account' ),
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
      this.onPlayerThemeChange = this.onPlayerThemeChange.bind( this );
      this.onPlayerVersionChange = this.onPlayerVersionChange.bind( this );

      this.state = {
        showYesDashicon: false,
        showNoDashicon: false,
      };
    }

    // set video id attribute (state) of edit component
    onIDChange( id ) {
      this.props.setAttributes( { id } );
      this.setState( { showYesDashicon: this.evaluateValidId( id ) } );
      this.setState( { showNoDashicon: this.evaluateInvalidId( id ) } );
    }
    // set width attribute (state) of edit component
    onWidthChange( width ) {
      this.props.setAttributes( { width } );
    }
    // set height attribute (state) of edit component
    onHeightChange( height ) {
      this.props.setAttributes( { height } );
    }
    // set player theme attribute (state) of edit component
    onPlayerThemeChange( vdo_theme ) {
      this.props.setAttributes( { vdo_theme } );
    }
    // set player version attribute (state) of edit component
    onPlayerVersionChange( vdo_version ) {
      this.props.setAttributes( { vdo_version } );
    }
    evaluateValidId( id ) {
      if ( id.length === 32 ) return true;
    }
    evaluateInvalidId( id ) {
      if ( id.length > 10 && id.length !== 32 ) return true;
    }
    render() {
      const { className } = this.props;
      const { id, width, height, vdo_theme, vdo_version } = this.props.attributes;
      return (
        <div className={ className }>
          <VdoBlockSettings
            width={ width }
            onWidthChange={ this.onWidthChange }
            height={ height }
            onHeightChange={ this.onHeightChange }
            vdo_theme={ vdo_theme }
            onPlayerThemeChange={ this.onPlayerThemeChange }
            vdo_version={ vdo_version }
            onPlayerVersionChange={ this.onPlayerVersionChange }
          />
          <VdoEmbed
            id={ id }
            onIDChange={ this.onIDChange }
            showYesDashicon={ this.state.showYesDashicon }
            showNoDashicon={ this.state.showNoDashicon }
          />
        </div>
      );
    }
  },

  save( { attributes } ) {
    return null;
  },
} );
