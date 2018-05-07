'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'avapiLse',
  props: ['confId', 'lat', 'lng'],
  template: '\n    <div class=\'vxlse\'>\n      <span class=\'vxwil\'\n            :t=\'confId\'\n            :ll=\'lat + "," + lng\'>\n      </span>\n    </div>',

  mounted: function mounted() {
    AVUXI.LSERefresh();
  }
};