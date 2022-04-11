export default {
  name: 'App',
  data () {
    return {
      formData: {
        username: '',
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
          name: 'Mumbai',
          selected: false
        },
        {
          name: 'Pune',
          selected: false
        },
        {
          name: 'Bangalore',
          selected: false
        },
        {
          name: 'Luknow',
          selected: false
        },
        {
          name: 'Delhi',
          selected: false
        },
        {
          name: 'Ahmedabad',
          selected: false
        },
        {
          name: 'Chennai',
          selected: false
        },
      ]
    }
  },
  computed: {
    selectedStops () {
      return this.availableStops.filter(s => s.selected)
    },
    optionStops () {
      return this.availableStops.filter(s => !s.selected)
    }
  },
  methods: {
    updateOptions () {
      this.availableStops.map(s => {
        if (s.name === this.selectedStop.name) {
          s.selected = true
        }
        return s;
      })
      this.selectedStop = ''
    },
    removeSelectedStop (stop) {
      this.availableStops.map(s => {
        if (s.name === stop.name) {
          s.selected = false
        }
        return s;
      })
    }
  }
}
