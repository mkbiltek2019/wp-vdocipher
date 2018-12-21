const { __, _x } = wp.i18n;
const { Button, Placeholder, TextControl } = wp.components;
const { BlockIcon } = wp.editor;
import { VdoSVG } from './vdo-icon';

export const VdoEmbed = (props) => {
  const { id, onIDChange, onButtonClick } = props;
  return (
    <div>
      <Placeholder
        icon={ <BlockIcon icon={VdoSVG} />}
        label ="VdoCipher Video Id"
        className="wp-block-embed" >
        <TextControl
           placeholder="Enter Video ID here"
           id="vdo-id-input"
           value={id}
           onChange = {onIDChange}
           className="components-placeholder__input"
         />
        <Button
          onClick = {onButtonClick}
          isLarge
          type="submit">
          { _x( 'Embed', 'button label' ) }
        </Button>
      </Placeholder>
      {/*
      <h3> VdoCipher Embed</h3>
      <span>Video ID: </span>

     */}
    </div>
   );
};
