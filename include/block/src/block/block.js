import './style.scss';
import './editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const { Button, TextControl } = wp.components;

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
  },
   edit: function(props) {
    const { id } = props.attributes;
    function onIDChange(id){
      props.setAttributes({id});
    }

    return (
      <div className={props.className}>
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
    // return (
    //     <p>[vdo id="{attributes.id}"]</p>
    // );
   },
});
