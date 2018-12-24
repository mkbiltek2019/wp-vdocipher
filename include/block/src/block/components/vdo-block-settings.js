import { HeightWidthSetting } from './height-width';
// import { PlayerThemeSetting } from './player-theme';
// import { PlayerVersionSetting } from './player-version';

/* global wp */
const { InspectorControls } = wp.editor;

export const VdoBlockSettings = ( props ) => {
  const {
    width,
    onWidthChange,
    WidthDashicon,
    height,
    onHeightChange,
    HeightDashicon,
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
          WidthDashicon={ WidthDashicon }
          height={ height }
          onHeightChange={ onHeightChange }
          HeightDashicon={ HeightDashicon }
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
