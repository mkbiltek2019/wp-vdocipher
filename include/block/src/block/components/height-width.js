/* global wp */
const { TextControl, PanelBody, PanelRow } = wp.components;
import { YesNoIcon } from './yes-no-icon';
import '../editor.scss';

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
        <YesNoIcon DashiconState={ WidthDashicon } size="28" />
      </PanelRow>
      <PanelRow>
        <TextControl
          label="Player Height"
          value={ height }
          onChange={ onHeightChange }
        />
        <YesNoIcon DashiconState={ HeightDashicon } size="28" />
      </PanelRow>
    </PanelBody>
  );
};
