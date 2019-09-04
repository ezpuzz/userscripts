// ==UserScript==
// @name         Discogs Ultra Wide
// @namespace    http://onlyfor.us/
// @version      0.1
// @description  wider layout for big screens
// @author       @ezpuzzle
// @match        https://www.discogs.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';

    $('#page').css('max-width', '2000px')
});