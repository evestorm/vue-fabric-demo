<template>
<div id="app">
  <div id="nav">
    <router-link to="/">Basic</router-link> |
    <router-link to="/canvas">Canvas</router-link> |
    <router-link to="/image">Image</router-link> |
    <router-link to="/path">Path</router-link> |
    <router-link to="/animate">Animate</router-link> |
    <router-link to="/text">Text</router-link> |
    <router-link to="/group">Group</router-link> |
  </div>
  <router-view />
</div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
