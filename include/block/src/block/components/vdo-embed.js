/* global wp */
const { Placeholder, TextControl, Dashicon } = wp.components;
const { BlockIcon } = wp.editor;
import { VdoSVG } from './vdo-icon';
import '../editor.scss';

export const VdoEmbed = ( props ) => {
  const { id, onIDChange, showYesDashiconId, showNoDashiconId } = props;
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
        { showYesDashiconId && <Dashicon icon="yes" size="36" className="dashicon dashicon-yes dashicon-green" /> }
        { showNoDashiconId && <Dashicon icon="no" size="28" className="dashicon dashicon-yes dashicon-red" /> }
      </Placeholder>
    </div>
  );
};
