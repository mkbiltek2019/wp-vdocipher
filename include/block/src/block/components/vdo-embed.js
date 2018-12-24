/* global wp */
const { Placeholder, TextControl, Dashicon } = wp.components;
const { BlockIcon } = wp.editor;
import { VdoSVG } from './vdo-icon';
import '../editor.scss';

const IdValid = ( { IdDashicon } ) => {
  if ( ! IdDashicon ) return null;
  else if ( IdDashicon === 1 ) {
    return (
      <Dashicon icon="yes" size="36" className="dashicon dashicon-yes dashicon-green" />
    );
  }
  return (
    <Dashicon icon="no" size="28" className="dashicon dashicon-yes dashicon-red" />
  );
};

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
        <IdValid IdDashicon={ IdDashicon } />
      </Placeholder>
    </div>
  );
};
