const { __ } = wp.i18n;
const { Button, Placeholder, TextControl } = wp.components;
const { BlockIcon } = wp.editor;

export const VdoEmbed = (props) => {
  const { id, onIDChange } = props;
  return (
    <div>
      <h3> VdoCipher Embed</h3>
      <span>Video ID: </span>
      <TextControl
         id="vdo-id-input"
         value={id}
         onChange = {onIDChange}
       />
    </div>
   );
};
