<?php
if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    exit("<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\r\n<html><head>\r\n<title>404 Not Found</title>\r\n".
        "</head><body>\r\n<h1>Not Found</h1>\r\n<p>The requested URL " . $_SERVER['SCRIPT_NAME'] . " was not found on ".
        "this server.</p>\r\n</body></html>");
}
?>

<div class="wrap">
<h2>VdoCipher Options</h2>

<form method="post" action="options.php">
<?php
settings_fields('vdo_option-group');
do_settings_sections('vdo_option-group');
?>
    <div class="updated">
        <p><strong>Status : </strong> Ready to use. You can now embed your videos inside posts and pages.</p>
    </div>
    <table class="form-table">
        <tr valign="top">
        <th scope="row">Client Secret Key</th>
        <td><input type="text" name="vdo_client_key"
          value="<?php echo esc_attr(get_option('vdo_client_key')); ?>"
          max-length="64" style="width: 640px" id="vdo_client_key" /></td>
        </tr>

        <tr valign="top">
        <th scope="row">Default Width</th>
        <td><input type="text" name="vdo_default_width"
          value="<?php echo esc_attr(get_option('vdo_default_width')); ?>"
        /></td>
        </tr>

        <tr valign="top">
        <th scope="row">Default Height</th>
        <td><input type="text" name="vdo_default_height"
          value="<?php echo esc_attr(get_option('vdo_default_height')); ?>"
        /></td>
        </tr>

        <!-- Version Number -->
         <?php
            if ((get_option('vdo_embed_version')) == false) {
            update_option('vdo_embed_version', '0.5');
            }
        ?>
        <tr valign="top">
        <th scope="row">Player Version</th>
        <td>
            <?php $vdo_embed_version_vars = array('0.5', '1.0.0', '1.1.0', '1.1.3', '1.2.7', '1.3.3'); ?>
            <select name="vdo_embed_version" id="vdo_embed_version">
                <?php
                    $vdo_embed_version_str = get_option('vdo_embed_version');
                    ?>
                <?php
                    foreach($vdo_embed_version_vars as $vdo_embed_version_var) {
                        if ($vdo_embed_version_str == $vdo_embed_version_var) {
                                $selected = 'selected="selected"'; }
                        else { $selected = ''; }

                        if($vdo_embed_version_var === '0.5') {
                            $version_old_new = ' (old player)' ; }
                        else {
                            $version_old_new = ' (new player)' ; }
                    ?>
                    <option value="<?php echo $vdo_embed_version_var; ?>" <?php echo $selected; ?> >
                        <?php echo $vdo_embed_version_var . $version_old_new ; ?>
                    </option>
                <?php } ?>
            </select>
        </td>
        </tr>

        <!-- Player Theme Options -->
        <?php
            if ((get_option('vdo_player_theme')) == false) {
            update_option('vdo_player_theme','9ae8bbe8dd964ddc9bdb932cca1cb59a');
            }
        ?>
        <tr valign="top">
        <th scope="row">Player Theme</th>
        <td>
            <input type="text" name="vdo_player_theme"
          value="<?php echo esc_attr(get_option('vdo_player_theme')); ?>" max-length = "32" style="width: 320px"
        />
        <p class="description">Player theme is not available for old player version(0.5). The default theme will be applied for old player.</p>
        </td>
        </tr>

        <tr valign="top">
        <th scope="row">Annotation Statement</th>
        <td>
            <textarea name="vdo_annotate_code" type="textarea" rows="5" cols="60"><?php
            if (get_option('vdo_annotate_code') != "") {
                echo get_option('vdo_annotate_code');
            }
            ?></textarea>
            <p class="description">Leave this text blank in case you do not need watermark over all Videos. For details on writing the annotation code <a href="https://www.vdocipher.com/blog/2014/12/add-text-to-videos-with-watermark/" target="_blank">check this out</a></p>
        </td>
        </tr>
    </table>
<?php submit_button(); ?>
</form>
</div>
