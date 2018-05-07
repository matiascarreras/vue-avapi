export default {
  name: 'avapiLse',
  props: ['confId', 'lat', 'lng'],
  template: `
    <div class='vxlse'>
      <span class='vxwil'
            :t='confId'
            :ll='lat + "," + lng'>
      </span>
    </div>`,
  
  mounted() {
    AVUXI.LSERefresh();
  },
}
