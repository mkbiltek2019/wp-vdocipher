import './style.scss';
import './editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const { Button, TextControl, PanelBody, PanelRow } = wp.components;
const { BlockControls, InspectorControls, RichText, AlignmentToolbar } = wp.editor;

registerBlockType( 'vdo/block', {
  title:  __('VdoCipher Embed video'),
  description: __('Embed videos from your VdoCipher account'),
  icon: 'video-alt3',
  category: 'embed',
  keywords: [
     __('vdocipher' ),
     __('video embed' ),
     __('vdo'),
  ],
   edit: function(props) {
    const { focus, setAttributes } = props;
    const { id, height, width, vdo_theme, vdo_version } = props.attributes;
    function onIDChange(id){
      setAttributes({id});
    }
    function onHeightChange(height){
      setAttributes({height});
    }
    function onWidthChange(width){
      setAttributes({width});
    }
    function onPlayerThemeChange(vdo_theme){
      setAttributes({vdo_theme});
    }
    function onPlayerVersionChange(vdo_version){
      setAttributes({vdo_version});
    }
    return (
      <div className={props.className}>
        <InspectorControls>
          <PanelBody title="Player Width and Height Settings">
            <PanelRow>
              <TextControl
                label='Player Width'
                value={ width }
                onChange={ onWidthChange }
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                label='Player Height'
                value={ height }
                onChange={ onHeightChange }
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="Player Theme (Custom Skins)">
            <PanelRow>
              <p>Visit <a target="_blank" href="https://www.vdocipher.com/blog/2018/10/video-player-themes/">Custom Skins blog</a> to browse video player themes. Add the themeID here to add a particular video skin to the video.</p>
            </PanelRow>
            <PanelRow>
              <TextControl
                label='Player Theme'
                value={ vdo_theme }
                onChange={ onPlayerThemeChange }
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title="VdoPlayer Version">
            <PanelRow>
              <TextControl
                label='Player Version'
                value={ vdo_version }
                onChange={ onPlayerVersionChange }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <h3> VdoCipher Embed</h3>
        <span>Video ID: </span>
        <TextControl
           id="vdo-id-input"
           value={id}
           onChange = {onIDChange}
         />
      </div>
    );
   },

   save({ attributes }){
    return null;
   },
});
