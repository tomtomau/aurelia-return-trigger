'use strict';

System.register(['./return-trigger'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./return-delegate');
  }

  _export('configure', configure);

  return {
    setters: [function (_returnTrigger) {}],
    execute: function () {}
  };
});