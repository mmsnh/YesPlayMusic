/*
 * @Author: xkloveme
 * @Date: 2022-04-20 13:51:18
 * @LastEditTime: 2022-10-10 17:00:25
 * @LastEditors: xkloveme
 * @Description: 入口
 * @FilePath: /utools-YesPlayMusic/data/preload.js
 * @Copyright © xkloveme
 */

const shell = require('electron').shell

window.openExternal = function (url) {
  shell.openExternal(url)
}