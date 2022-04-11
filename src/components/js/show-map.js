import { GoogleMap, Polyline } from "vue3-google-map";

export default {
    name: 'ShowMap',
    components: {
      GoogleMap,
      Polyline
    },
    data () {
      return {
        selectedRoute: {},
        center: { lat: 24, lng: 78 },
        flightPath: {
          path: [],
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        }
      }
    },
    created () {
      if (localStorage.getItem('routes') !== null) {
        const routes = JSON.parse(localStorage.getItem('routes'))
        this.selectedRoute = routes.find(r => r.routeId === this.$route.params.routeId)
        const paths = this.selectedRoute.selectedStops.map(stop => {
          return {
            lat: stop.lat,
            lng: stop.long
          }
        })
        this.flightPath.path = paths
        console.log('paths', this.flightPath);
      }
    }
  }