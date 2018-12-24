/* global wp */
const { TextControl, PanelBody, PanelRow, Dashicon } = wp.components;
import '../editor.scss';

const DashiconState = ( { DashiconState } ) => {
  if ( ! DashiconState ) return null;
  else if ( DashiconState === 1 ) {
    return (
      <Dashicon icon="yes" size="28" className="dashicon dashicon-yes dashicon-green" />
    );
  }
  return (
    <Dashicon icon="no" size="22" className="dashicon dashicon-yes dashicon-red" />
  );
};

export const HeightWidthSetting = ( props ) => {
  const {
    width,
    onWidthChange,
    WidthDashicon,
    height,
    onHeightChange,
    HeightDashicon,
  } = props;

  return (
    <PanelBody title="Player Width and Height Settings" className="vdo-height-width">
      <PanelRow>
        <TextControl
          label="Player Width"
          value={ width }
          onChange={ onWidthChange }
        />
        <DashiconState DashiconState={ WidthDashicon } />
      </PanelRow>
      <PanelRow>
        <TextControl
          label="Player Height"
          value={ height }
          onChange={ onHeightChange }
        />
        <DashiconState DashiconState={ HeightDashicon } />
      </PanelRow>
    </PanelBody>
  );
};
