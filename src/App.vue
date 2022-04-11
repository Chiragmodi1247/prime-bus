<template>
  <div class="container">
    <div class="navbar">
      <router-link to="/" class="router-link">Prime Bus</router-link>
    </div>
    <router-view />
  </div>
</template>

<script src="./App.js"></script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  background-color: rgb(59 130 246);
  font-size: 2em;
  font-weight: bold;
  padding: 20px;
}

.router-link {
  text-decoration: none;
  color: white;
}
</style>
