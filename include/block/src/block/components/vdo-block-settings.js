import { HeightWidthSetting } from './height-width';
// import { PlayerThemeSetting } from './player-theme';
// import { PlayerVersionSetting } from './player-version';

/* global wp */
const { InspectorControls } = wp.editor;

export const VdoBlockSettings = ( props ) => {
  const {
    width,
    onWidthChange,
    showYesDashiconWidth,
    showNoDashiconWidth,
    height,
    onHeightChange,
    showYesDashiconHeight,
    showNoDashiconHeight,
    // vdo_theme,
    // vdo_version,
    // onPlayerThemeChange,
    // onPlayerVersionChange,
  } = props;

  return (
    <div>
      <InspectorControls>
        <HeightWidthSetting
          width={ width }
          onWidthChange={ onWidthChange }
          height={ height }
          onHeightChange={ onHeightChange }
          showYesDashiconWidth={ showYesDashiconWidth }
          showNoDashiconWidth={ showNoDashiconWidth }
          showYesDashiconHeight={ showYesDashiconHeight }
          showNoDashiconHeight={ showNoDashiconHeight }
        />
        { /*
        <PlayerThemeSetting
          vdo_theme={vdo_theme}
          onPlayerThemeChange={onPlayerThemeChange}
          />
        <PlayerVersionSetting
          vdo_version={vdo_version}
          onPlayerVersionChange={onPlayerVersionChange}
          />
          */ }
      </InspectorControls>
    </div>
  );
};
