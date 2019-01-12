import { HeightWidthSetting } from './height-width';
// import { PlayerThemeSetting } from './player-theme';
// import { PlayerVersionSetting } from './player-version';

/* global wp */
const { InspectorControls } = wp.editor;

export const VdoBlockSettings = ( props ) => {
  const {
    width,
    onWidthChange,
    widthDashicon,
    height,
    onHeightChange,
    heightDashicon,
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
          widthDashicon={ widthDashicon }
          height={ height }
          onHeightChange={ onHeightChange }
          heightDashicon={ heightDashicon }
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
