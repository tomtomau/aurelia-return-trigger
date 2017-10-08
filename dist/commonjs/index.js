'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

require('./return-trigger');

function configure(config) {
  config.globalResources('./return-delegate');
}