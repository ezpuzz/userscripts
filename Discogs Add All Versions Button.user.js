// ==UserScript==
// @name         Discogs Add All Versions Button
// @namespace    http://onlyfor.us/
// @version      0.1
// @description  add all versions of release from individual release page instead of master page
// @author       @ezpuzzle
// @match        https://www.discogs.com/*/release/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = $('.release_collections_menu').append('<a class="button button-small"><i class="icon icon-wantlist"></i>Add all versions to Wantlist</a>')
    var master = $('#m_versions > h3 > a').attr('href').split('/').pop()

    button.on('click', function() {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                $('.skittle_wantlist').css('display', 'inline-block')
                $('.skittle_wantlist > .count').text('1')
            }
        }

        request.open("POST", '/master/want_add', true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.responseType = "document";
        request.send('master_id='+master);
    });
})();