export default {
    name: 'AddRoute',
    data () {
      return {
        formData: {
          name: '',
          direction: '',
          routeId: '',
          status: ''
        },
        selectedStop: '',
        directions: [
          'UP', 'DOWN'
        ],
        stutusOptions: [
          'Active', 'Inactive'
        ],
        availableStops: [
          {
            name: 'Delhi',
            selected: false,
            lat: 28.6600,
            long: 77.2300
          },
          {
            name: 'Mumbai',
            selected: false,
            lat: 18.9667,
            long: 72.8333
          },
          {
            name: 'Kolkāta',
            selected: false,
            lat: 22.5411,
            long: 88.3378
          },
          {
            name: 'Bangalore',
            selected: false,
            lat: 12.9699,
            long: 77.5980
          },
          {
            name: 'Chennai',
            selected: false,
            lat: 13.0825,
            long: 80.2750
          },
          {
            name: 'Hyderābād',
            selected: false,
            lat: 17.3667,
            long: 78.4667
          },
          {
            name: 'Pune',
            selected: false,
            lat: 18.5196,
            long: 73.8553
          },
          {
            name: 'Ahmedabad',
            selected: false,
            lat: 23.0300,
            long: 72.5800
          },
          {
            name: 'Lucknow',
            selected: false,
            lat: 26.8470,
            long: 80.9470
          },
          {
            name: 'Jaipur',
            selected: false,
            lat: 26.9167,
            long: 75.8667
          },
        ],
        selectedStops: [],
        hasError: false,
        oldRoutes: []
      }
    },
    computed: {
      optionStops () {
        return this.availableStops.filter(s => !s.selected)
      }
    },
    methods: {
      updateOptions () {
        this.availableStops.map(s => {
          if (s.name === this.selectedStop.name) {
            s.selected = true
            this.selectedStops.push(this.selectedStop)
          }
          return s;
        })
        this.selectedStop = ''
      },
      removeSelectedStop (stop, index) {
        this.availableStops.map(s => {
          if (s.name === stop.name) {
            s.selected = false
          }
          return s;
        })
        this.selectedStops.splice(index, 1)
      },
      submitNewRoute () {
        if (!this.validation()) {
          return
        }
        this.checkForDuplicateRoute()
        const newRoute = { ...this.formData, selectedStops:this.selectedStops }
        this.oldRoutes.push(newRoute)
        localStorage.setItem('routes', JSON.stringify(this.oldRoutes))
      },
      validation () {
        if (this.formData.name.trim() === '' || this.formData.direction.trim() === '' || this.formData.routeId.trim() === ''
        || this.formData.status.trim() === '' || this.selectedStops.length < 2) {
          this.hasError = true
          return false
        }
        return true
      },
      checkForDuplicateRoute () {
        let foundIndex = this.oldRoutes.findIndex(r => r.routeId === this.formData.routeId)
        if (foundIndex !== -1) {
          this.oldRoutes.splice(foundIndex, 1)
        }
      }
    },
    created () {
      if (localStorage.getItem('routes') !== null) {
        this.oldRoutes = JSON.parse(localStorage.getItem('routes'))
      }
      if (this.$route.params.routeId) {
        const editRoute = this.oldRoutes.find(r => r.routeId === this.$route.params.routeId)
        this.formData.name = editRoute.name
        this.formData.direction = editRoute.direction
        this.formData.routeId = editRoute.routeId
        this.formData.status = editRoute.status
        this.selectedStops = editRoute.selectedStops
      }
    }
  }
  