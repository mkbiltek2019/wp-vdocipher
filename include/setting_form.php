<?php
if (__FILE__ == $_SERVER['SCRIPT_FILENAME']) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    exit("<!DOCTYPE HTML PUBLIC \"-//IETF//DTD HTML 2.0//EN\">\r\n<html><head>\r\n<title>404 Not Found</title>\r\n".
        "</head><body>\r\n<h1>Not Found</h1>\r\n<p>The requested URL " . $_SERVER['SCRIPT_NAME'] . " was not found on ".
        "this server.</p>\r\n</body></html>");
}
?>
<div class="wrap">
<form method="post" action="options.php">
<?php
settings_fields('vdo_option-group');
do_settings_sections('vdo_option-group');
?>
    <h2>Please enter your VdoCipher API Secret Key</h2>

    <table class="form-table">
        <tbody><tr>
            <td style="width: 160px;">VdoCipher secret key :</td>
            <td>
                <input name="vdo_client_key" style="width: 400px;"
                  value="<?php echo esc_attr(get_option('vdo_client_key')); ?>"
                  type="text">
            </td>
        </tr>

    </tbody></table>
<?php submit_button(); ?>
</form>
</div>
