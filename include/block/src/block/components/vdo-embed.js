/* global wp */
const { Placeholder, TextControl } = wp.components;
const { BlockIcon } = wp.editor;
import { YesNoIcon } from './yes-no-icon';
import { VdoSVG } from './vdo-icon';
import '../editor.scss';

export const VdoEmbed = ( { id, onIdChange, IdDashicon } ) => {
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
          onChange={ onIdChange }
          className="components-placeholder__input"
        />
        <YesNoIcon DashiconState={ IdDashicon } size="36" />
      </Placeholder>
    </div>
  );
};
