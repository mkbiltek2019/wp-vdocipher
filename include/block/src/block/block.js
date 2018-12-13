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
  attributes: {
    id: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
    height: {
      type: 'string'
    }
  },
   edit: function(props) {
    const { focus, setAttributes } = props;
    const { id, height, width } = props.attributes;
    function onIDChange(id){
      setAttributes({id});
    }
    function onHeightChange(height){
      setAttributes({height});
    }
    function onWidthChange(width){
      setAttributes({width});
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
