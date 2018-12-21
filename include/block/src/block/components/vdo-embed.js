/* global wp */
const { Placeholder, TextControl } = wp.components;
const { BlockIcon } = wp.editor;
import { VdoSVG } from './vdo-icon';

export const VdoEmbed = ( props ) => {
  const { id, onIDChange } = props;
  return (
    <div>
      <Placeholder
        icon={ <BlockIcon icon={ VdoSVG } /> }
        label="VdoCipher Video Id"
        className="wp-block-embed" >
        <TextControl
          placeholder="Enter Video ID here"
          id="vdo-id-input"
          value={ id }
          onChange={ onIDChange }
          className="components-placeholder__input"
        />
      </Placeholder>
    </div>
  );
};
