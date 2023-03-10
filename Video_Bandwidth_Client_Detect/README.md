# Video Bandwidth Detection
This is a deprecated application that was used to determine a clients connection speed and deliver the appropriate video encoding.



## Macromedia Flash Communication Server Policies and Procedures

I. Administration:
* Maintain the server hardware and Operating System
* Responsible for all critical updates, maintenance patches and the like
* Perform regular data backups
* Ensure that Antivirus software is installed, properly configured, and updated regularly.
 
We will ensure that the Flash Communication Server software is properly configured.  In addition, we shall be responsible for maintaining this application.
 
II. Accessing:
Physical location, the server shall be housed within Information Services secured server area.
 
Network Address
The servers address is ##.#.##.### and is assigned the domain name of url.com.
 
Login Information:
The windows system administration account credentials are:
Username: ############
Password: ############
Username: ############
Password: ############
 
VNC:
Server: ##.#.##.###
Encryption: Always Off
Select OK
Password: flash
 
Flash Communication Administration Console
Username: Administrator
Password: flash
 
FTP:
Server: ##.#.##.###
Username: ############
Password: ############
 
 
III.  Installation Information:
* Macromedia Flash Communication Server 1.5 is installed at: c:\program files\macromedia\flash communication server mx
* The application directory for installing scripts, uploading content via FTP and such is at: c:\program files\macromedia\flash communication server mx\applications
* The server uses the following ports: 80, 8080, 1935, 442, 443


Internal IP: ##.#.##.###
External IP: ##.#.##.###
DNC: url.com
Pointers: 
 
 
Running:
Apache 2.2.3 (patch from apachelounge  to get MySQL running)
C:\webapps\apache
C:\webapps\apache\logs
Root:
C:\Inetpub\wwwroot
 
PHP 5.1.4
C:\webapps\php
C:\Inetpup\uploadtemp
 
MySQL Community Edition 5.023
C:\webapps\mysql
Username: ############
Password: ############
 
Operating System
Windows 2003 Standard Server
Username: ############
Password: ############
 
VNC
Password: ############
 
Flash Communication Server 1.5
C:\program files\macromedia\flash communication server
Uses ports 1935, 443, 80, 8080
 
OpenSSH
C:\program files\openssh
C:\program files\openssh\etc\password
Mkgroup
Mkpassword
Edit etc\password
 
Junction
Creates symlinks in windows
 
 
Gallery2
C:\Inetpub\wwwroot\gallery
Username: ############
Password: ############
Serendipity
C:\Inetpub\wwwroot\
Username: ############
Passowrd: ############
 
Created support group and added staff to group as editors
 
Sendmail
From: email@email.com
Path: no value
SMTP: url.com
 
Secure the server by:
PHP safe_mode
Open_basedir = web root (set to prevent browsing elsewhere)
MySQL turn off tcp/ip so connections are from localhost only on port 3306
Installed MySQL workbench
 
 
Apache Optimization
 
Static files use              mod_cache               cached on disk
 
Plenty of RAM use      mod_mem_cache              cached in memory
 
Use only necessary modules
 
Clean up the http.conf file
 
Remove system configuration that are not in use:
   HostnameLookup      off
   Soft Handler       server-status     -remove
   Allow Override None     to any (Directory) section to turn off .htaccess
 
Multi-Processing Mode (MPM)
   Max Clients                                                  Start Servers (5) no effect on window
   Min Spare Servers (5) no effect on Windows     Keep Alive Timeout (don’t set above 60 sec.)
   Max Spare Servers (10) no effect on Windows   Name Virtual Host (don’t need)
 
Apache uses 3 config files:
 
            http.cont, access.conf, & svm.conf
            move items from other two into http.conf
            AccessConfig  /dev/null
            ResourceConfig /dev/null
 
 
 
 
Max Requests Per Child                  (0)      should be 0 on Win32
Max Keep Alive Request    (100)   0 is unlimited, use a high number instead
Max Client                         (256)   to configure more than this edit HARD_SERVER_LIMIT
 
 
 
 Setup
General
The Flash Interactive Media server is installed at online1.dbc.edu (10.9.91.170), which is a Windows 2003 Advanced Server. Supporting documentation is available from Adobe online at: http://www.adobe.com/support/documentation/en/flashmediaserver/
To preserve the integrity of the server and maintain optimal application performance no other software should be configured at this location. To maintain a consistency across applications the following naming convention and directory structure should be followed:
filename: course_prefix_number_video_name_version
path: c:/program files/Adobe/FMS3/applications/vod/media format: .mp4

Delivery Dependencies
Each page uses the Jeroen Wijering FLV Media Player. Be certain to visit: http://www.jeroenwijering.com/? item=JW_FLV_Media_Player regularly for the latest updates. This player and requires the swfobject JavaScript file to embed the Flash content. It is available from the Google Code bank at: http://code.google.com/p/swfobject/. For detailed information about this project visit their blog at: http://blog.deconcept.com/swfobject/. The JavaScipt file can be used to pass commands to the player to maintain control over its behavior and performance. This application also derives code from: http://www.xspf.org/.


Here are some of the variables and parameters that can be passed:
so.addVariable('showdownload', ''); // (false,true): Only for the player. Set this to true to show a download button in the player controlbar, which links to the link flashvar.
so.addVariable('link',''); // (url): Set this to an external URL or downloadeable version of the file. This link is assigned to the display, logo and download button. With playlists, set links for every entry in the XML.
so.addVariable('linkfromdisplay',''); // (true,false): Set this to true to make a click on the display result in a jump to the webpage assigned to the link flashvar.
so.addVariable('linktarget',''); // (frame): Set this to the frame you want hyperlinks to open in. The default is _self. Set it to _blank to open links in a new window, _self to open links in the same frame and _top to open in the top frame.
so.addVariable('audio',''); // (url): Assigns an additional, synchronized MP3. Use this for a closed audio description or director's comments with the player or background music with the rotator. When using the player and a playlist, you can assign audio to every entry.

so.addVariable('fallback',''); // (url): Only for the mediaplayer. If you play an MP4 file, set here the location of an FLV fallback. It'll automatically be picked by older flash players (example).
so.addVariable('recommendations',''); // (url): Set this to an XML with items you want to recommend. The thumbs will show up when the current movie stops playing, just like YouTube. Here's an example setup and example XML.
so.addVariable('streamscript',''); // (url): Set this to the URL of a script to use for http streaming FLV or MP4 files. The parameters file and pos are sent to the script. Here's more info and an example script. If you use LigHTTPD streaming, set this to lighttpd (Lighttpd MP4 example).
so.addVariable('type',''); // (mp3,flv,rtmp,jpg,png,gif,swf): The player determines the type of file to play based upon the last three characters of the file flashvar. This doesn't work with database id's or mod_rewrite, so you can set this flashvar to the correct filetype. By default, the player assumes a playlist is loaded.
Flashvars available: http://www.jeroenwijering.com/extras/readme.html
displayheight, file, height, image, shownavigation, transition, width, backcolor, frontcolor, lightcolor, screencolor, autoscroll, displaywidth, kenburns, largecontrols, logo, overstretch, showdigits, showdownload, showeq, showicons, showvolume, thumbsinplaylist, autostart, bufferlength, repeat, rotatetime, shuffle, smoothing, start, volume, audio, bwfile, bwstreams, callback, captions, enablejs, fsbuttonlink, id, javascriptid, link, linkfromdisplay, linktarget, streamscript, type, useaudio, usecaptions, usefullscreen, usekeys,

Accessibility: captions, largecontrols and audiotrack.
This is the only player capable of displaying both closed captions (the "T" button) and a closed audio description (the "A" button). This is a capability since Flash Player version 7.0.0.
Bandwidth Detection Code
file: "flv/ars_antiqua.flv",
bwfile: "img/100k.jpg",
bwstreams: "56,256,512", so.addVariable('file','rtmp://url.com/uploads/'); so.addVariable('file','xspf_example.xml'); so.addVariable('id','mul1010_ars_antigua'); so.addVariable('bwfile','img/100k.jpg'); so.addVariable('bwstreams','56,256');
Sample JavaScript Code
<script type="text/javascript">
var so = new SWFObject('swf/mediaplayer.swf','mpl','800','600','8');
￼so.addVariable('width','800');

so.addVariable('height','600'); so.addVariable('file','uploads/streams/_definst_/video_name.xspf'); so.addVariable('config','config.xml'); // the configuration so.addVariable('useaudio', 'true'); // if available so.addVariable('showdownload','true');
so.write('player');
</script>
XML Configuration File
<?xml version="1.0" encoding="windows-1250"?> <config>
<file>config.xml</file>
<autostart>true</autostart>
<backcolor>0x000000</backcolor>
<frontcolor>0xFFFFFF</frontcolor>
<screencolor>0x000000</screencolor>
<lightcolor>0xFFFFFF</lightcolor>
<volume>80</volume>
<thumbsinplaylist>true</thumbsinplaylist>
<logo>img/flon_logo.png</logo>
<allowfullscreen>false</allowfullscreen>
<usefullscreen>false</usefullscreen>
<allowscriptaccess>always</allowscriptaccess> <configresource>http://www.jeroenwijering.com/?item=Supported_Flashvars#callback</configresource> <bufferlength>3</bufferlength>
<overstretch>false</overstretch> <!-- true, false, fit, none --> <showicons>true</showicons> <showstop>false</showstop> <showdigits>true</showdigits>
<repeat>list</repeat> </config>
XSPF File
<?xml version="1.0" encoding="UTF-8"?>
<playlist version="1" xmlns="http://xspf.org/ns/0/">
<title>Florida Online</title> <info></info> <annotation>Playlist in XSPF format</annotation> <trackList>
<track>
<!-- Tags: http://www.jeroenwijering.com/?item=Supported_Playlists --> <title>MUL1010: Chamber Music</title>
<creator>Florida Online</creator>
Florid<aloOcnalitnieon>rFtMmSp3:U/s/avgec1G.udibdecc.edu/uploads/</location>
<identifier>mul1010_chamber_music_256</identifier>
<annotation>/flashcom/uploads/streams/_definst_/docs/mul1010_chamber_music.pdf</annotation><!-- insert a link to file if you allow downloads -->
<info>/flashcom/uploads/streams/_definst_/docs/mul1010_chamber_music.pdf</info>
<meta rel='type'>rtmp</meta>
<meta rel="captions">/flashcom/uploads/streams/_definst_/docs/mul1010_chamber_music.cc</meta> <!-- <meta rel="audio">mul1010_chamber_music.mp3</meta> --> <image>/flashcom/uploads/streams/_definst_/flon_logo.png</image>
<album>overlay</album><!-- Other options: preroll, commercial> -->
<date>1202780292</date>
<extension application="drm">
<drm>Copyright</drm>
<drm_owner>DBC</drm_owner>
<notes>performers: Pamela Hanson-Peterson, Stephen Nelson, Katherine Nicklin, Barbara Burton, Artie Almeida, Monya Winzer Gilbert</notes>
</extension> </track>
</trackList> </playlist>

Current Working Files:
Help Documents:
http://livedocs.adobe.com/flashmediaserver/3.0/hpdocs/help.html?content=Book_Part_31_deving_1.html http://livedocs.adobe.com/flashmediaserver/3.0/hpdocs/help.html?content=Book_Part_35_serv_man_asd_1.html
Updates:
http://www.adobe.com/support/flashmediaserver/downloads_updaters.html

 

## Methods for Embedding Flash in a Web Page
Tuesday, October 9, 2007, 10:50 AM - Web 2.0
There are several methods to embed Flash in a web page. The majority of users rely on the default HTML code that is generated by the Flash IDE also known as the 'Twice-Code Method' because it uses "Microsoft’s specific object implementation with the proprietary embed element nested inside it as alternative content." This code works but has several problems, the first of which is a lack of conformance with the World Wide Web Consortium guidelines for XHTML. The following is a brief discussion of various methods to work around this issue:

### Flash Satay
The first such technique, called Flash Satay, was proposed by Drew McLellan on November 09, 2002 in an article published by the online magazine A List Apart (http://www.alistapart.com/articles/flashsatay/).
Drew's proposal begins by first removing the unnecessary elements from the auto-generated HTML code by Flash IDE. The first of these is the <embed> tag as it is not part of the XHTML specification. It is preferable to use the object tag as it is standards compliant, offers support for alternative content, and is search engine friendly. The codebase attribute is removed since it contains a URL outside the current domain. This can pose a security risk. The next element removed is the classid as it is primarily recognized by Internet Explorer and ignored by other browsers. Instead Drew proposes adding the 'type' attribute to specify the MIME type and identify the player. The changes thus become:

~~~
type="application/x-shockwave-flash"
~~~

The resultant code will now validate but Internet Explorer will not play the embedded Flash content until it has completely downloaded. This creates a usability issue that must be addressed. So Drew proposed creating a Flash file with the following ActionScript on Frame 1 in the root of the movie to simulate streaming in Internet Explorer:

~~~
_root.loadMovie(_root.path,0);
~~~

So the file name/data becomes loader.swf?path=movie.swf
Drew concludes by reminding developers that the problem with removing the codebase attribute is that the browsers which support this attribute will no longer prompt to update the player. So this will need to be addressed at some point. The resultant code is as follows:
<object type="application/x-shockwave-flash data="loader.swf?path=movie.swf" width="400" height="300"> <param name="movie" value="loader.swf?path=movie.swf" /> <img src="noflash.gif" width="200" height="100" alt="" /> <p>Hey buddy, your missing something important here! Go get the Flash plugin to check it out.</p>
</object>

#### Other Thoughts
In an excellent article (http://www.alistapart.com/articles/flashembedcagematch) by Bobby van der Sluis the ideals developers should strive for are discussed. In summary, these are:
* Standards compliance
* Cross-browser support
* Support for alternative content
* Avoidance of Flash content/player mismatches
* Auto-activation of active content
* Ease of implementation

Bobby states, "The dual implementation of the object element technically doesn’t break web standards, but it is the root of many problems. As a consequence, we need to find a way to combine the two object implementations into a single technique...we also have to deal with browsers that have (or used to have) a broken object implementation."

#### Object Nesting
This is a standard compliant method that supports alternative content. However, it lacks cross-browser support as Internet Explorer versions prior to 7.0 read nested object tags in series, thus attempting to show both. Versions of Safari prior to and including
version 1.2.2 will "ignore the object element's nested param elements."
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8- 444553540000" width="300" height="120">
<param name="movie" value="movie.swf" />
<object type="application/x-shockwave-flash" data="movie.swf" width="300" height="120">
<p>Alternative content</p> </object>
</object>

### Object Nesting Workaround
Apply Internet Explorer conditional statements. This could become rather complicated.
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8- 444553540000" codebase="http://download.macromedia.com/pub/shockwave/cab s/flash/swflash.cab#version=6,0,0,0" width="300" height="120">
<param name="movie" value="movie.swf" /> <!--[if !IE]>-->
<object type="application/x-shockwave-flash" data="movie.swf" width="300" height="120">
<!--<![endif]--> <p>Alternative content</p> <!--[if !IE]>-->
</object>
<!--<![endif]--> </object>


#### CSS Hacks
http://joliclic.free.fr/html/object-tag/en/index.php Create special class for IE such as:
/* hides the second object from all versions of IE */ * html object.hiddenObjectForIE { display: none; }
/* display the second object only for IE5 Mac */ /* IE Mac \*//*/
* html object.hiddenObjectForIE { display: inline; } /**/

Then the style to the nested element:
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8- 444553540000" codebase="http://download.macromedia.com/pub/shockwave/cab s/flash/swflash.cab#version=6,0,0,0" width="300" height="120">
<param name="movie" value="movie.swf" /> <object type="application/x-shockwave-flash"
data="movie.flv" width="320" height="240" class="hiddenObjectForIE">
<a href="movie.mov">movie.mov</a> </object>
</object>


#### Approaches using JavaScript
Other methods involve the use of JavaScript to write the object/embed tags. However, all this does is obfuscate otherwise invalid code in an attempt to pass validation. It will also result in content not being displayed to users who have JavaScript disabled but it could have the advantage of being more reuseable.

FLACCESS
http://meddle.dzygn.com/eng/weblog/accessible.flash.v1.3/

SWFObject (by Geoff Stearns) http://blog.deconcept.com/swfobject/
This script offers flash detection and player embedding. It supports alternative content, remains search engine friendly, and assists with HTML and XHTML validation. It also allows interaction with content without having to activate it first (see the Eolas Patent Dispute http://blog.deconcept.com/2005/12/15/internet-explorer-eolas- changes-and-the-flash-plugin/).
However, this JavaScript library has some flaws: it uses Adobe's twice cooked method, and it is based on JavaScript that replaces alternative content "with a DOM script when the required Flash and JavaScript support is available." "As a result a small group of visitors that have the Flash plugin installed but have JavaScript disabled or lack sufficient JavaScript support will see only alternative content."
Unobtrusive Flash Objects (UF: by Bobby van der Sluis) http://www.bobbyvandersluis.com/ufo/

Uses JavaScript to generate mostly standards-compliant markup. This library retains the same benefits as the SWFObject but also suffers from its reliance upon JavaScript.

#### ObjectSwap
The case for unobtrusive DOM scripting
"To solve the degradation issue, it would make more sense to use a truly unobtrusive embedding method: a hybrid solution that uses standards compliant markup like that used in the Flash Satay method to embed both Flash content and alternative content while employing an unobtrusive DOM script that serves as an add-on to fix problems and add services to modern browsers."
"Unfortunately, ObjectSwap focuses primarily on the auto-activation of active content, so it isn’t as useful for version detection and markup-support problems like the lack of streaming support in Internet Explorer or parameter support in older versions of Safari."
"Another point it can be improved on—which is something to keep in mind for all unobtrusive libraries—is performance. By using the onload event, your DOM related behavior is only applied after a whole page, including all of its assets, is loaded. A better alternative would be the DOMContentLoaded event, which lets you apply your behavior as soon as a page’s DOM is available. Because the DOMContentLoaded event is not fully supported across browsers yet, you could use this solution instead."
SWFFix project aka swfObject (by Bobby van der Sluis and Geoff Stearns)
http://www.swffix.org/devblog/ http://code.google.com/p/swfobject/
Testing: http://www.swffix.org/testsuite/
Currently in beta phases attempts to address all of these issues. "SWFFix is an open source project by Geoff Stearns, Michael Williams and Bobby van der Sluis with the goal to create a next generation JavaScript library for embedding Flash content...All team members have made their marks by authoring SWFObject, the Flash player detection kit and UFO, which are currently the most popular Flash embed libraries available."

Whichever method you use be certain to add alternative content that includes a link to download the latest Flash player. If you insert an image do not forget the alternate text and title tags.
Some Additional Concerns
http://www.jeroenwijering.com/?item=Embedding_Flash
"For embedding on profile sites (like MySpace), an extra problem arises since these sites filter the object tag. An embed-only approach will do the job. Also, these profile sites don't allow you to upload files on their own server, so you'll have to look out for an external server to store your files on. Just remember to put at least the SWF and XML files at the same server, and refer to all files (SWF, XML and MP3/FLV/JPG) with a full pathname."



## Video Player Desired Features (2010)
Musts 
bandwidth detection
flv fallback
google analytics
closed captioning


FlowPlayer Resources:
---------------------
http://flowplayer.org/demos/index.html
http://flowplayer.org/demos/plugins/streaming/mp4-pseudostreaming.html
http://flowplayer.org/demos/scripting/fallback.html
http://flowplayer.org/demos/plugins/streaming/bandwidth-detection.html
http://flowplayer.org/demos/plugins/streaming/bandwidth-detection.htm
http://static.flowplayer.org/demos/plugins/streaming/bwcheck-rss.html
http://flowplayer.org/demos/plugins/streaming/bandwidth-detection.html
http://static.flowplayer.org/demos/plugins/streaming/cloudfront.html
http://static.flowplayer.org/plugins/index.html
http://static.flowplayer.org/demos/scripting/fallback.html
http://static.flowplayer.org/demos/plugins/streaming/mp4-pseudostreaming.html
http://static.flowplayer.org/forum/3/10048
http://flowplayer.org/demos/plugins/streaming/bwcheck-rss.html
http://static.flowplayer.org/forum/users/14023



JW Player Plugins:
------------------
http://www.longtailvideo.com/addons/plugins/43/Google-Analytics?q=
http://www.longtailvideo.com/addons/plugins/65/HD?q=
http://www.longtailvideo.com/support/adsolution
http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5/49/using-cloudfront

Todo:
-----
http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v4/27/bitrate-switching
http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5
http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5/24/creating-a-playlist


Working:
--------
http://write2it.net/dev/jw_flv_player_5.2/index2.html
http://write2it.net/dev/jw_flv_player_5.2/index.html
http://write2it.net/dev/jw_flv_player_5.2/readme.html
https://console.aws.amazon.com/s3/home


file:///Applications/xampp/xamppfiles/htdocs/dev/wordpress/wp-content/plugins/reusable_content/jw_flv_player%203.14%20client/chamber_music.html

file:///Applications/xampp/xamppfiles/htdocs/dev/wordpress/wp-content/plugins/reusable_content/flowplayer/example/index_redo.html

file:///Applications/xampp/xamppfiles/htdocs/dev/wordpress/wp-content/plugins/reusable_content/jw_flv_player%203.14%20client/chamber_music.html

file:///Applications/xampp/xamppfiles/htdocs/dev/wordpress/wp-content/plugins/reusable_content/jw_flv_player_3.14/test.html


Sorenson 360 (http://www.sorensonmedia.com/video-delivery-network/) 
RTMP
if you upload MP4 videos, we have intelligent embed codes in place to detect for iDevices so that iPads and iPhones can easily play back the videos
Bitrate?
right now we are serving a single version, but we have plans to incorporate adaptive bit rate this year as well
How do the user accounts work?
you can assign a sub account user to a specific group of videos so that when they log-in to the account, they only see videos in the Group that they are assigned to, or you can choose to give them full access to all videos in the account.

Is 360 cloud-based, serving content from a variety of locations in close proximity to users or from a single server location?
we are fully partnered with Amazon Web Services for the 360 platform so we are utilizing their Cloudfront with 15 edge locations across the globe for easy playback anywhere, as opposed to streaming everything from a single server which does not work nearly as well if viewers are not close to that server

Can you stream a live feed?
No




RTMP or Progressive?
Device detection?
Bitrate detection?
How many users can be setup?
Cloud-based, serving content from a variety of locations in close proximity to users or from a single server location?
Can you stream a live feed?
Closed captioning?