=== Plugin Name ===
Contributors: vibhavsinha
Tags: video, DRM, video plugin, sell video, e-learning, movie
Requires at least: 3.5.1
Tested up to: 4.9
Stable tag: 1.17
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A simple wordpress plugin which enables you to embed VdoCipher videos inside a WordPress website.

== Description ==

VdoCipher video plugin enables you to host premium video content on your WordPress website. VdoCipher's Video Plugin gives you complete control over your video content, so you can start minting money out of your awesome videos.

With VdoCipher's WordPress video plugin you get the highest protection from video piracy. Our video streaming service involves Video Encryption, Backend Authentication & Watermarking. This video encryption technology makes sure that no downloader or plugin can download your videos.

= Perfect Choice for Premium Video Content =
VdoCipher is the perfect choice for premium video content, such as lecture videos, music, and movies. VdoCipher WordPress video plugin seamlessly integrates with all popular WP membership plugins, including *Members*, *Restrict Content Pro*, *MemberPress* and *WP eMember*. The video plugin also works perfectly with top Learning Management systems such as *Sensei*, *LearnDash*, *WP CourseWare*, *LifterLMS* and *LearnPress*

= Makes Embedding Secure Videos as Easy as Copying URLs =
It would take you at most 10 minutes to signing up on [VdoCipher](http://www.vdocipher.com) and install the video plugin. You can embed videos to your website using a one-line shortcode.

= Getting started =
To get started, you should create an account on [VdoCipher](https://www.vdocipher.com). You will then receive a client_secret_key by email. You will need this client_secret_key to use the video plugin. You can upload vidoes to the VdoCipher dashboard, or import directly from URL or Dropbox.

= Multi-Bitrate Video Streaming =
With VdoCipher video plugin your users get the choice to watch low bitrate videos to optimize their data usage. Our encoding optimizations ensure that videos use the lowest bandwidth for high quality videos.

[youtube https://www.youtube.com/watch?v=bGJLs6VOvAM]

= Requirements =
php5-curl need to be installed on the server for this plugin to work.

= Additional Resources =
[VdoCipher's video encryption technology](https://www.vdocipher.com/blog/2016/08/encrypted-video-streaming-vdocipher-technology-details/)
[VdoCipher's complete feature set](https://www.vdocipher.com/blog/2016/12/video-hosting-for-business/)
[Watermarking with the WordPress video plugin](https://www.vdocipher.com/blog/2014/12/add-text-to-videos-with-watermark/)

== Installation ==
1. Activate the "VdoCipher" plugin .
2. Click on the settings link or go to Settings > VdoCipher to configure.
3. Enter the API key that you received from VdoCipher and click Save.

Your video plugin is ready to use. Inside a post or page you can write `[vdo id="id_of_video"]` to embed the video in a post or page.

To set width and height use, `[vdo id="id_of_video" width="300" and height="200"]`

== Frequently Asked Questions ==
Please refer to the [FAQ page on VdoCipher](http://www.vdocipher.com/page/faq)

= Is there a free trial? =
On account creation, you shall be provided with 5GB of free trial bandwidth.

== Screenshots ==

1. The setting screen to to enter the API key.
2. The options page
3. Using the shortcode to embed a video
4. Video playing inside a post.

== Changelog ==

= 1.17 =
* updated player theme

= 1.16 =
* more documentation
* updated player

= 1.15 =
* fixed bugs for older php versions

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
* Include options form to set default options for videos.

= 0.1 =
* A basic plugin which just makes it possible to embed vdocipher videos inside a wordpress plugin

== Upgrade Notice ==

= 1.17 =
* updated player theme

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
