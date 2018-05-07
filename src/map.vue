<template>
  <div class='vxmap'></div>
</template>

<script>
  export default {
    name: 'avapiMap',
    props: ['confId', 'lat', 'lng', 'zoom'],
    
    mounted() {
      const options = {
        zoom: parseInt(this.zoom),
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      const map = new google.maps.Map(this.$el, options);
      AVUXI.MapStart(map, this.confId);
    },
  }
</script>
