<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./_bootstrap/scss/custom.scss";
@import "./fonts/metropolis-bold/metropolis.css";
@import "./fonts/playball-regular/playball.css";
@import "./fonts/210-gulim-030/210-gulim-030.css";
@import "./fonts/210-gulim-050/210-gulim-050.css";

.gulim030 {
  font-family: gulim030, serif;
}
.gulim050 {
  font-family: gulim050, serif;
}
.metropolis-bold {
  font-family: metropolisbold, serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
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

<style lang="sass">
$vs-card-type-6-color-background-one: #24b171
$vs-card-type-6-color-background-two: #17a2b8
$vs-card-type-6-color-text: #fff
$vs-card-type-6-shadow-opacity: 0.4

$vs-card-type-7-color-background: #f4f6f7
$vs-card-type-7-color-text: #000
$vs-card-type-7-shadow-opacity: 0.1

@import '_vuesax/sass/customCard'

</style>
