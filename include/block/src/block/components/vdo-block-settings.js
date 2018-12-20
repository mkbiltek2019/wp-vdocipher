import { HeightWidthSetting } from './height-width.js';
import { PlayerThemeSetting } from './player-theme.js';
import { PlayerVersionSetting } from './player-version.js';

const { InspectorControls } = wp.editor;

export const VdoBlockSettings = (props) => {
  const {
    width,
    height,
    vdo_theme,
    vdo_version,
    onWidthChange,
    onHeightChange,
    onPlayerThemeChange,
    onPlayerVersionChange
  } = props;

  return (
    <div>
      <InspectorControls>
        <HeightWidthSetting
          width={width}
          onWidthChange={onWidthChange}
          height={height}
          onHeightChange={onHeightChange}
          />
        <PlayerThemeSetting
          vdo_theme={vdo_theme}
          onPlayerThemeChange={onPlayerThemeChange}
          />
        <PlayerVersionSetting
          vdo_version={vdo_version}
          onPlayerVersionChange={onPlayerVersionChange}
          />
      </InspectorControls>
    </div>
  );
};
