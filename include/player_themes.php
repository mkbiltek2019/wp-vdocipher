<?php
?>

<div style="padding-top: 10px;">
  <h1>Select a player theme </h1>
</div>
<div id="available_themes" style="display: flex; flex-wrap: wrap; justify-content: space-between; ">
  <div id="1e0143ace9054f6cb638caf349b2b43f" style="width:32.7%">
    <div style = "display: flex; cursor: pointer; align-items: baseline; height: auto;">
      <img id="1e0143ace9054f6cb638caf349b2b43f-image" src="<?php echo plugin_dir_url(__FILE__).'img/default.png' ?>" alt="VdoCipher Default player" width="100%" data-theme="1e0143ace9054f6cb638caf349b2b43f" data-state="" style="margin:auto; /*position: absolute*/;">
    </div>
    <div style="margin:10px; display: flex; justify-content: space-between;">
      <div>Theme ID: 1e0143ace9054f6cb638caf349b2b43f </div>
      <button id="1e0143ace9054f6cb638caf349b2b43f-btn" style="display: inline-block;">Select</button>
    </div>
  </div>
  <div id="5962d374450d4ca3a152e318af41aa89" style="width: 32.7%">
    <div style = "display: flex; cursor: pointer; align-items: baseline; height: auto;">
      <img id="5962d374450d4ca3a152e318af41aa89-image" src="<?php echo plugin_dir_url(__FILE__).'img/color.png' ?>" alt="VdoCipher Default player" width="100%" data-theme="5962d374450d4ca3a152e318af41aa89" data-state="" style="margin:auto;">
    </div>
    <div style="margin:10px; display: flex; justify-content: space-between;">
      <div>Theme ID: 5962d374450d4ca3a152e318af41aa89 </div>
      <button id="5962d374450d4ca3a152e318af41aa89-btn" style="display: inline-block;">Select</button>
    </div>
  </div>
  <div id="arsenal" style="width: 32.7%">
    <div style = "display: flex; cursor: pointer; align-items: baseline; height: auto;">
      <img id="arsenal-image" src="<?php echo plugin_dir_url(__FILE__).'img/default.png' ?>" alt="VdoCipher Default player" width="100%" data-theme="arsenal" data-state="" style="margin:auto;">
    </div>
    <div style="margin:10px; display: flex; justify-content: space-between;">
      <div>Theme ID: arsenal </div>
      <button id="arsenal-btn" style="display: inline-block;">Select</button>
    </div>
  </div>
  <div id="chelsea" style="width: 32.7%">
    <div style = "display: flex; cursor: pointer; align-items: baseline; height: auto;">
      <img id="chelsea-image" src="<?php echo plugin_dir_url(__FILE__).'img/default.png' ?>" alt="VdoCipher Default player" width="100%" data-theme="chelsea" data-state="" style="margin:auto;">
    </div>
    <div style="margin:10px; display: flex; justify-content: space-between;">
      <div>Theme ID: chelsea </div>
      <button id="chelsea-btn" style="display: inline-block;">Select</button>
    </div>
  </div>
</div>
<div>
<form name="playerThemeForm" method="post" action="options.php">
<?php
  settings_fields('vdo_custom_theme');
  do_settings_sections('vdo_custom_theme');
?>
  <table class="form-table">
  <?php

  if ((get_option('vdo_player_theme_options'))) {
    $vdo_custom_theme1 = get_option('vdo_player_theme_options');
    update_option('vdo_player_theme', $vdo_custom_theme1);
  }
  elseif ((get_option('vdo_player_theme')) == false) {
      update_option('vdo_player_theme', '9ae8bbe8dd964ddc9bdb932cca1cb59a');
      update_option('vdo_player_theme_options', '9ae8bbe8dd964ddc9bdb932cca1cb59a');
  }
  else {
    $vdo_custom_theme1 = get_option('vdo_player_theme');
    update_option('vdo_player_theme_options', $vdo_custom_theme1);
  }
  $vdo_custom_theme = get_option('vdo_player_theme_options');
  ?>
    <tr valign="top">
      <th scope="row" style="width:100px;">Player Theme</th>
      <td>
        <input id="vdo_player_theme_options" type="text" name="vdo_player_theme_options"
        value="<?php echo esc_attr(get_option('vdo_player_theme_options')); ?>" max-length = "32" style="width: 320px"
        />
      </td>
    </tr>
  </table>
  <?php
  wp_enqueue_script('vdo_theme_options_select', plugin_dir_url(__FILE__).'js/themeselect.js');
  wp_localize_script('vdo_theme_options_select', 'vdoThemeOption', array(
    'selectedTheme'=>$vdo_custom_theme
  ));
  ?>
  <?php submit_button(); ?>
</form>
</div>
<div>
  <h4><a href="<?php menu_page_url( 'vdocipher', 1 ); ?> ">Return to Settings Page </a></h4>
</div>
