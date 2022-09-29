// ==UserScript==
// @name         youtube-menu-container-no-text
// @namespace    https://github.com/weepjp/youtube-menu-container-no-text
// @version      2022.09.30
// @description  DetailedTime 使いたいのにテキストが邪魔で見えなくしてくれるからノーテキストにするやつ
// @author       weepjp https://github.com/weepjp/
// @license      Released under the GNU General Public License version 3 https://opensource.org/licenses/GPL-3.0
// @icon         data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAACwAgCdASoQABAAD8D+JaQAOcCzbPsBUndPd3PgoEAAz/pGNqZo2J8hVgUjLGYv70tHddblDC8wq+RSCiA2COJIT2YAWuSZXcTxIGfhVbvPvJl/I1nWxeg9hlAAAA==
//
// @match        https://*.youtube.com/watch*
// @match        https://youtube.com/watch*
//
// @resource     ymcnt https://raw.githubusercontent.com/weepjp/youtube-menu-container-no-text/main/ymcnt.css
//
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function(){
    GM_addStyle(GM_getResourceText('ymcnt'));
})();

/* (;-;|||) */
