import './style.scss';
import './editor.scss';
import { VdoSVG } from './components/vdo-icon';
import { VdoEmbed } from './components/vdo-embed';
import { VdoBlockSettings } from './components/vdo-block-settings';

/* global wp */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
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
  edit: function( props ) {
    const { setAttributes } = props;
    const { id, width, height, vdo_theme, vdo_version } = props.attributes;
    // set video id attribute (state) of edit component
    function onIDChange( id ) {
      setAttributes( { id } );
    }
    // set width attribute (state) of edit component
    function onWidthChange( width ) {
      setAttributes( { width } );
    }
    // set height attribute (state) of edit component
    function onHeightChange( height ) {
      setAttributes( { height } );
    }
    // set player theme attribute (state) of edit component
    function onPlayerThemeChange( vdo_theme ) {
      setAttributes( { vdo_theme } );
    }
    // set player version attribute (state) of edit component
    function onPlayerVersionChange( vdo_version ) {
      setAttributes( { vdo_version } );
    }

    return (
      <div className={ props.className }>
        <VdoBlockSettings
          width={ width }
          onWidthChange={ onWidthChange }
          height={ height }
          onHeightChange={ onHeightChange }
          vdo_theme={ vdo_theme }
          onPlayerThemeChange={ onPlayerThemeChange }
          vdo_version={ vdo_version }
          onPlayerVersionChange={ onPlayerVersionChange }
        />
        <VdoEmbed
          id={ id }
          onIDChange={ onIDChange }
        />
      </div>
    );
  },

  save( { attributes } ) {
    return null;
  },
} );
