export default {
  name: 'ViewRoutes',
  data () {
    return {
      routes: []
    }
  },
  methods: {
    showMap(routeId) {
      this.$router.push({ name: 'ShowMap', params: { routeId } })
      // this.$router.push({ name: 'ShowMap' })
    },
    editRoute (routeId) {
      this.$router.push({ name: 'AddRoute', params: { routeId } })
    },
    deleteRoute (routeId) {
      const updatedRoutes = this.routes.filter(r => r.routeId !== routeId)
      this.routes = updatedRoutes
      localStorage.setItem('routes', JSON.stringify(this.routes))
    }
  },
  created () {
    if (localStorage.getItem('routes') !== null) {
      this.routes = JSON.parse(localStorage.getItem('routes'))
    }
  }
}