/* global wp */
const { Dashicon } = wp.components;

export const YesNoIcon = ( { DashiconState, size } ) => {
  if ( ! DashiconState ) return null;
  if ( DashiconState === 1 ) {
    return (
      <Dashicon icon="yes" size={ size } className="dashicon dashicon-yes dashicon-green" />
    );
  }
  return (
    <Dashicon icon="no" size={ size * 0.75 } className="dashicon dashicon-yes dashicon-red" />
  );
};
