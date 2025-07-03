// ==UserScript==
// @name        Reddit Enhancements
// @namespace   github.com/shanto
// @match       https://www.reddit.com/*
// @icon        https://www.redditstatic.com/shreddit/assets/favicon/64x64.png
// @grant       none
// @version     1.0
// @author      -
// @description Hides recents and community sections in left navigation bar of Reddit
// @downloadURL https://raw.githubusercontent.com/shanto/UserScripts/refs/heads/main/src/Reddit-Enhanced.user.js
// @homepageURL https://github.com/shanto/UserScripts
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==

(function() {
    'use strict';

	VM.observe(document.body, () => {
	  let comms = document.querySelector('faceplate-loader[name^="LeftNavCommunitiesSection_"] + faceplate-expandable-section-helper[open] faceplate-tracker');
	  if(comms && comms.hasUpdated) {
	    window.setTimeout(() => { comms.click() }, 50);
		return true;
	  }
	});

	VM.observe(document.body, () => {
	  let rcnts = document.querySelector('faceplate-loader[name^="LeftNavRecentSection_"] + reddit-recent-pages')?.renderRoot?.querySelector('faceplate-expandable-section-helper[open] faceplate-tracker');
	  if(rcnts) {
	    rcnts.click();
		return true;
	  }
	});

})();