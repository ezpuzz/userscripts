// ==UserScript==
// @name         Discogs List Videos
// @namespace    http://onlyfor.us/
// @version      0.1
// @description  show videos for each release in list rather than all in one playlist
// @author       @ezpuzzle
// @match        https://www.discogs.com/lists/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('#page_aside').remove();
    $('#page_content').css('width', '100%')

    // Your code here...
    var releases = $('li.listitem');

    releases.each(function() {
        var release = $(this);
        //var video = $(this).append('<button style="float: right">Video</button>')
        var href = $(this).find('a').attr('href');

            var request = new XMLHttpRequest();


            request.onload = function() {
                // add html5 player to screen
                console.log(this.responseXML);
                var youtube = this.responseXML.getElementById('youtube_player_placeholder');
                var ids = $(youtube).attr('data-video-ids')

                var newYoutube = `https://www.youtube.com/embed/?playlist=${ids}`
                console.log(newYoutube)

                release.prepend($(`<iframe src="${newYoutube}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`).css('float', 'right').css('height', '300px').css('width', '400px'));
            };

            request.open("GET", href);
            request.responseType = "document";
            request.send();
    })
})();