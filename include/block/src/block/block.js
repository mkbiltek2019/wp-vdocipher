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
    vid: {
      type: 'string'
    },
  },
   edit: function(props) {

    const { vid } = props.attributes;

    function onVIDChange(vid){
      props.setAttributes({vid});
    }

    return (
      <div className={props.className}>
        <h2> VdoCipher Embed</h2>
        <span style={{marginBottom: 5}}>Video ID: </span>
        <TextControl
         id="vdo-id-input"
         value={vid}
         onChange = {onVIDChange}
         />
      </div>
    );
   },

   save({ attributes }){
    return (
        <p>[vdo id="{attributes.vid}"]</p>
    );
   },
});

