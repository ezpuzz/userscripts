// ==UserScript==
// @name         Discogs Track Youtube History
// @namespace    http://onlyfor.us/
// @version      0.1
// @description  attempt to enable tracked history for youtube videos on discogs
// @author       @ezpuzzle
// @match        https://www.discogs.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';

    var iframe = $('iframe')
    var newYoutube = iframe.attr('src').replace('-nocookie', '')
    iframe.attr('src', newYoutube)
});