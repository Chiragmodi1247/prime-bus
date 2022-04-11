<template>
	<div class="content">
		<img src="../../src/assets/bus.png" alt="bus" class="content__image">
		<form class="content__form" v-on:submit.prevent="submitForm">
			<div class="form_title">
				<h2>Add Route</h2>
				<router-link v-if="oldRoutes.length" to="/viewRoutes" class="router-link">View Routes -></router-link>
			</div>
			<!-- text input -->
			<div class="form-group">
				<label for="name" class="form-label">Name</label>
				<br>
				<input type="text" class="form-control" id="formData.name" v-model="formData.name" />
			</div>

			<!-- select -->
			<div class="form-group">
				<label for="direction" class="form-label">Direction</label>
				<select v-model="formData.direction" class="form-control">
					<option disabled value="">Please select one</option>
					<option v-for="(direction,index) in directions" :value="direction" :key="index + direction">{{ direction }}</option>        
				</select>
			</div>

			<!-- text input -->
			<div class="form-group">
				<label for="routeId" class="form-label">Route ID</label>
				<input type="text" class="form-control" id="formData.routeId" v-model="formData.routeId" />
			</div>

			<!-- select -->
			<div class="form-group">
				<label for="status" class="form-label">Status</label>
				<select v-model="formData.status" class="form-control">
					<option disabled value="">Please select one</option>
					<option v-for="(status,index) in stutusOptions" :value="status" :key="index + status">{{ status }}</option>        
				</select>
			</div>

			<!-- multi-select -->
			<div class="form-group">
				<label for="status" class="form-label">Stops</label>
				<ul class="selected-options" id="combo2-selected">
					<li v-for="(stop, index) in selectedStops" :key="index + stop"
					class="remove-option" @click="() => removeSelectedStop(stop, index)">
						{{ stop.name }}
					</li>
				</ul>
				<select v-model="selectedStop" class="form-control" @change="updateOptions">
					<option v-for="(stop,index) in optionStops" :value="stop"
						:key="index + stop">
						{{ stop.name }}
					</option>        
				</select>
			</div>

			<button @click="submitNewRoute" class="submit-button">Submit</button>
			<h2 v-if="hasError" class="error">Please fill valid data!</h2>
		</form>
	</div>
</template>

<script src="./js/add-route.js"></script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
h2 {
	margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.router-link {
  color: rgb(0, 0, 0);
}

.navbar {
  background: rgb(124, 124, 255);
  font-size: 2em;
  font-weight: bold;
  color: white;
  padding: 20px;
}

.content {
  position: relative;
}
.content__image {
  position: absolute;
  height: calc(100vh - 80px);
}

.form_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.content__form {
  position: absolute;
	background: white;
	right: 5vw;
	width: 25vw;
	margin-left: auto;
	margin-top: 10vh;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border-radius: 5px;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(97,97,97,1);
	-moz-box-shadow: 0px 0px 5px 0px rgba(97,97,97,1);
	box-shadow: 0px 0px 5px 0px rgba(97,97,97,1);
}

.form-label {
  font-weight: bold; 
  text-align: right;
}
.form-group {
	width: 100%;
	margin-top: 20px;
}
.form-control {
	max-width: 100%;
	width: 100%;
	font-size: 1em;
	padding: 5px;
}

input.form-control {
	width: 96%;
}

.selected-options {
  list-style-type: none;
  margin: 0;
  max-width: 400px;
  padding: 0;
}

.selected-options li {
  display: inline-block;
  margin-bottom: 5px;
}

.submit-button {
	width: 25%;
	align-self: center;
	margin-top: 20px;
  background: rgb(83, 83, 255);
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
  padding: 10px;
  text-decoration: none;
}

.remove-option {
  background-color: #6200ee;
  border: 1px solid #6200ee;
  border-radius: 3px;
  color: #fff;
  font-size: 0.75em;
  font-weight: bold;
  margin-bottom: 6px;
  margin-right: 6px;
  padding: 0.25em 1.75em 0.25em 0.25em;
  position: relative;
}

.remove-option::before,
.remove-option::after {
  border-right: 2px solid #fff;
  content: "";
  height: 1em;
  right: 0.75em;
  position: absolute;
  top: 50%;
  width: 0;
}

.remove-option::before {
  transform: translate(0, -50%) rotate(45deg);
}

.remove-option::after {
  transform: translate(0, -50%) rotate(-45deg);
}

.error {
	text-align: center;
	color: red;
}
</style>