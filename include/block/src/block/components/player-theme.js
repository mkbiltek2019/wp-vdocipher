/* global wp */
const { TextControl, PanelBody, PanelRow } = wp.components;

export const PlayerThemeSetting = ( props ) => {
  const {
    vdo_theme,
    onPlayerThemeChange,
  } = props;

  return (
    <PanelBody title="Player Theme (Custom Skins)">
      <PanelRow>
        <p>Visit
          <a target="_blank" rel="noopener noreferrer"
            href="https://www.vdocipher.com/blog/2018/10/video-player-themes/">
          Custom Skins blog</a> to browse video player themes.
        Add the themeID here to add a particular video skin to the video.</p>
      </PanelRow>
      <PanelRow>
        <TextControl
          label="Player Theme"
          value={ vdo_theme }
          onChange={ onPlayerThemeChange }
        />
      </PanelRow>
    </PanelBody>
  );
};
