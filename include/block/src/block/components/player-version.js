const { TextControl, PanelBody, PanelRow } = wp.components;

export const PlayerVersionSetting = (props) => {
  const {
    vdo_version,
    onPlayerVersionChange
  } = props;

  return (
    <PanelBody title="VdoPlayer Version">
      <PanelRow>
        <TextControl
          label='Player Version'
          value={ vdo_version }
          onChange={ onPlayerVersionChange }
        />
      </PanelRow>
    </PanelBody>
  );
}
