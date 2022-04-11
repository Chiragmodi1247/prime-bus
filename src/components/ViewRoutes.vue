<template>
  <div class="routes">
    <div class="routes-header">
      <h1 class="routes-header-title">Routes</h1>
      <router-link to="/" class="routes-header-button">Add Routes</router-link>
    </div>
    <table class="routes-table">
      <thead>
        <tr>
          <th class="table-head">Route ID</th>
          <th class="table-head">Route Name</th>
          <th class="table-head">Direction</th>
          <th class="table-head">Status</th>
          <th class="table-head">Start stop</th>
          <th class="table-head">End stop</th>
          <th class="table-head">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(route, index) in routes" :key="index + route.routeId" class="table-row">
          <td class="table-data"> {{ route.routeId }} </td>
          <td class="table-data"> {{ route.name }} </td>
          <td class="table-data"> {{ route.direction }} </td>
          <td class="table-data"> {{ route.status }} </td>
          <td class="table-data"> {{ route.selectedStops[0].name }} </td>
          <td class="table-data"> {{ route.selectedStops[route.selectedStops.length - 1].name }} </td>
          <td class="table-data">
            <div class="table-data__actions">
              <img class="action-item" src="../../src/assets/eye_1.svg" @click="() => showMap(route.routeId)">
              <img class="action-item" src="../../src/assets/edit_1.svg" @click="() => editRoute(route.routeId)">
              <img class="action-item" src="../../src/assets/download_1.svg">
              <img class="action-item" src="../../src/assets/delete_1.svg" @click="() => deleteRoute(route.routeId)">
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./js/view-routes.js"></script>

<style scoped>

.routes {
  width: 80vw;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  margin-left: auto;
  margin-right: auto;
}

.routes-header {
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
}

.routes-header-title {
  margin: 0;
}

.routes-header-button {
  background: rgb(83, 83, 255);
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
  margin: 0;
  padding: 10px;
  text-decoration: none;
}

table {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
}

.routes-table {
  width: 100%;
  table-layout: auto;
  text-align: left;
}

.table-head {
  background-color: rgb(202, 202, 202);
  color: black;
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: .05em;
  line-height: 1.25rem;
  padding: 0.75rem 2rem;
}

.table-row:nth-child(2) {
  background-color: rgb(202, 202, 202);
}

.table-data {
  padding-bottom: 0.75rem;
  padding-top: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;  
}

.table-data__actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.action-item {
  cursor: pointer;
}

</style>