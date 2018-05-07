'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'avapiMap',
  props: ['confId', 'lat', 'lng', 'zoom'],
  template: '<div class=\'vxmap\'></div>',

  mounted: function mounted() {
    var options = {
      zoom: parseInt(this.zoom),
      center: new google.maps.LatLng(this.lat, this.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.$el, options);
    AVUXI.MapStart(map, this.confId);
  }
};