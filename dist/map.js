'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'avapiMap',
  props: ['confId', 'lat', 'lng', 'zoom'],
  template: '<div class=\'vxmap\'></div>',

  mounted: function mounted() {
    var leaflet = require('leaflet');

    var options = {
      zoom: parseInt(this.zoom),
      minZoom: 10,
      maxZoom: 18,
      zoomControl: true,
      center: { lat: this.lat, lng: this.lng }
    };

    var map = leaflet.map(this.$el, options);
    leaflet.tileLayer('https://{s}-tile.avuxicdn.com/avuxi-th2/{z}/{x}/{y}.png?tpkey=622bb407a904e838e65ebfd8', {
      attribution: '<a href="https://www.avuxi.com" target="_blank">AVUXI</a>'
    }).addTo(map);
    AVUXI.MapStart(map, this.confId);
  }
};