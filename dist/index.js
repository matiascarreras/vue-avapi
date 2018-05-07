'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _lse = require('./lse.js');

var _lse2 = _interopRequireDefault(_lse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) return;

  Vue.component(_map2.default.name, _map2.default);
  Vue.component(_lse2.default.name, _lse2.default);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.default = {
  avapiMap: _map2.default,
  avapiLse: _lse2.default,
  install: install
};