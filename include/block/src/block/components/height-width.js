/* global wp */
const { TextControl, PanelBody, PanelRow, Dashicon } = wp.components;
import '../editor.scss';

export const HeightWidthSetting = ( props ) => {
  const {
    width,
    onWidthChange,
    showYesDashiconWidth,
    showNoDashiconWidth,
    height,
    onHeightChange,
    showYesDashiconHeight,
    showNoDashiconHeight,
  } = props;

  return (
    <PanelBody title="Player Width and Height Settings" className="vdo-height-width">
      <PanelRow>
        <TextControl
          label="Player Width"
          value={ width }
          onChange={ onWidthChange }
        />
        { showYesDashiconWidth && <Dashicon icon="yes" size="28" className="dashicon dashicon-yes dashicon-green" /> }
        { showNoDashiconWidth && <Dashicon icon="no" size="22" className="dashicon dashicon-yes dashicon-red" /> }
      </PanelRow>
      <PanelRow>
        <TextControl
          label="Player Height"
          value={ height }
          onChange={ onHeightChange }
        />
        { showYesDashiconHeight && <Dashicon icon="yes" size="28" className="dashicon dashicon-yes dashicon-green" /> }
        { showNoDashiconHeight && <Dashicon icon="no" size="22" className="dashicon dashicon-yes dashicon-red" /> }
      </PanelRow>
    </PanelBody>
  );
};
