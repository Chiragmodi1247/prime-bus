<template>
  <div class="container">
    <section class="container-section">
      <div class="section-title">
        <div>
          <h3>Route ID</h3>
          <h2>{{ selectedRoute.routeId }}</h2>
        </div>
        <div>
          <h3>Route Name</h3>
          <h2>{{ selectedRoute.name }}</h2>
        </div>
        <div>
          <h3>Route Status</h3>
          <h2>{{ selectedRoute.status }}</h2>
        </div>
        <div>
          <h3>Route Direction</h3>
          <h2>{{ selectedRoute.direction }}</h2>
        </div>
        <div>
          <h3>Start Stop</h3>
          <h2>{{ selectedRoute.selectedStops[0].name }}</h2>
        </div>
        <div>
          <h3>End Stop</h3>
          <h2>{{ selectedRoute.selectedStops[selectedRoute.selectedStops.length - 1].name }}</h2>
        </div>
      </div>
      <div class="section-stop-container">
        <h3>Stops</h3>
        <div class="section-stops">
          <h2 v-for="(stop, index) in selectedRoute.selectedStops" :key="index + stop.name" class="section-stop-item">
            {{stop.name}}
            <span v-if="index !== selectedRoute.selectedStops.length - 1">,</span>
          </h2>
        </div>
      </div>
    </section>
    <div>
      <GoogleMap api-key="AIzaSyCsYeUOMZc46HlZhnnhdTue-sXBd007_qk" style="width: 100%; height: 500px" :center="center" :zoom="6">
        <Polyline :options="flightPath" />
      </GoogleMap>
    </div>
  </div>
</template>

<script src="./js/show-map.js"></script>

<style scoped>
h3,h2 {
  margin: 0;
  padding: 0;
}
h2 {
  font-weight: 400;
}
h3 {
  font-weight: 300;
}

.container {
  width: 80vw;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  display: flex;
  justify-content: space-between;
}

.section-stops {
  display: flex;
}

.section-stop-container {
  margin-top: 10px;
}

.section-stop-item {
  margin-right: 10px;
}

</style>