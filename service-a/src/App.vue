<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/service-b1">Service B1</router-link> |
    <router-link to="/service-b2">Service B2</router-link> |
    <router-link to="/service-b3">Service B3 (bug)</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
