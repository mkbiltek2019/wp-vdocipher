=== Plugin Name ===
Contributors: vibhavsinha
Tags: video, DRM, video, sell video, e-learning, movie
Requires at least: 3.5.1
Tested up to: 4.8.1
Stable tag: 1.14
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A simple wordpress plugin which enables you to embed vdocipher videos inside a wordpress website.

== Description ==

**About VdoCipher** - [VdoCipher](http://www.vdocipher.com) is an online video streaming service for premium content. VdoCipher Video Plugin for Wordpress ensures highest protection against content piracy. Encryption, Watermarking & Backend Authentication ensures that no downloader or plugin can download videos embedded using VdoCipher. This enables our customers to earn maximum revenues from their customers.  The video plugin is easy to use and you can integrate and start streaming in 10 minutes. This makes it the ideal choice for easily hosting premium video content like lecture vidoes, music or movies.
[VdoCipher](https://www.vdocipher.com) provides a nice smooth wordpress embed video player to have your viewers best video streaming experience. Multiple bitrates can be allowed on the wordpress video player.

**Getting started** - To get started, you need to create an account on [VdoCipher](https://www.vdocipher.com), After creating the account, you will receive a client_secret_key by email. You will need this client_secret_key to use this plugin. Upload vidoes from the website. You can also import vidoes directly from URL or Dropbox.

*Requirements*
php5-curl need to be installed on the server for this plugin to work.


== Installation ==
1. Activate the "VdoCipher" plugin .
2. Click on the settings link or go to Settings > VdoCipher to configure.
3. Enter the API key that you received from VdoCipher and click Save.

You plugin is ready to use. Inside a post or page you can write `[vdo id="id_of_video"]` to embed the video in a post or page.

You can optionally use the title to set the video. This will display the first video matching the given title.
To set width and height use, `[vdo id="id_of_video" width="300" and height="200"]`
You need to use the exact title of the video as shown in the dashboard.


== Frequently Asked Questions ==
Please refer to the [FAQ page on VdoCipher](http://www.vdocipher.com/page/faq)


= Is there any free trial? =
On account creation, you shall be provided with 5GB of free trial bandwidth.


== Screenshots ==

1. The setting screen to to enter the API key.
2. The options page
3. Using the shortcode to embed a video
4. Video playing inside a post.

== Changelog ==

= 1.14 =
* add new player version 1.1.0

= 1.13 =
* New player with ability to choose player version
* Add custom themes from theplayer.io

= 1.8 =
Bug fixes

= 1.7 =
* set max height and width as default settings in 16:9 ratio
* use asynchronous code for rendering video player
* watermark date in wp timezone
* use wp transport apis instead of curl

= 1.6 =
* add filter hooks for annotation statement

= 1.3 =
* Compatible with PHP5.2

= 1.0 =
* Annotation can now be set from wordpress dashboard
* Better system for storing client key
* Clear options table of plugin related keys on deactivate
* Inlcude options form to set default options for videos.

= 0.1 =
* A basic plugin which just makes it possible to embed vdocipher videos inside a wordpress plugin

== Upgrade Notice ==

= 1.8 =
Bug fixes

= 1.7 =
* watermark date in wordpress timezone

= 1.6 =
* annotation pre and post process hooks to add content specific custom variables

= 1.5 =
* Multiple videos bug fix

= 1.3 =
* Compatible with PHP5.3

= 1.0 =
* This allows you to set annotation over video.
* No more editing files directly.
