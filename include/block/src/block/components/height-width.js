const { TextControl, PanelBody, PanelRow } = wp.components;

export const HeightWidthSetting = (props) => {
  const {
    width,
    height,
    onWidthChange,
    onHeightChange,
  } = props;

  return (
    <PanelBody title="Player Width and Height Settings">
      <PanelRow>
        <TextControl
          label='Player Width'
          value={ width }
          onChange={ onWidthChange }
        />
      </PanelRow>
      <PanelRow>
        <TextControl
          label='Player Height'
          value={ height }
          onChange={ onHeightChange }
        />
      </PanelRow>
    </PanelBody>
  );
}
