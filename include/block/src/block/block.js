import './style.scss';
import './editor.scss';
import { VdoSVG } from './components/vdo-icon.js';
import { VdoEmbed } from './components/vdo-embed.js';
import { VdoBlockSettings } from './components/vdo-block-settings.js'

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;

registerBlockType( 'vdo/block', {
  title:  __('VdoCipher Embed video'),
  description: __('Embed videos from your VdoCipher account'),
  icon: VdoSVG,
  category: 'embed',
  keywords: [
     __('vdocipher' ),
     __('video embed' ),
     __('vdo'),
  ],
   edit: function(props) {
    const { focus, setAttributes } = props;
    const { id, width, height, vdo_theme, vdo_version } = props.attributes;
    function onIDChange(id){
      setAttributes({id});
    }
    function onWidthChange(width){
      setAttributes({width});
    }
    function onHeightChange(height){
      setAttributes({height});
    }
    function onPlayerThemeChange(vdo_theme){
      setAttributes({vdo_theme});
    }
    function onPlayerVersionChange(vdo_version){
      setAttributes({vdo_version});
    }

    return (
      <div className={props.className}>
        <VdoBlockSettings
          width={width}
          onWidthChange={onWidthChange}
          height={height}
          onHeightChange={onHeightChange}
          vdo_theme={vdo_theme}
          onPlayerThemeChange={onPlayerThemeChange}
          vdo_version={vdo_version}
          onPlayerVersionChange={onPlayerVersionChange}
        />
        <VdoEmbed id={id} onIDChange={onIDChange} />
      </div>
    );
   },

   save({ attributes }){
    return null;
   },
});
