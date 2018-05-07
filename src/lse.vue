<template>
  <div class='vxlse'>
    <span class='vxwil'
          :t='confId'
          :ll='`${lat},${lng}`'>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'avapiLse',
    props: ['confId', 'lat', 'lng'],
    
    mounted() {
      AVUXI.LSERefresh();
    },
  }
</script>
