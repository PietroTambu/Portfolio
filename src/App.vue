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

@font-face {
  font-family: Metropolis-Bold;
  src: url("./fonts/Metropolis-Bold.otf");
}
@font-face {
  font-family: Playball-Regular;
  src: url("./fonts/Playball-Regular.ttf");
}
@font-face {
  font-family: Gulim-210-030;
  src: url("./fonts/210-Gulim-030.ttf");
}
@font-face {
  font-family: Gulim-210-050;
  src: url("./fonts/210-Gulim-030.ttf");
}
.metropolis-bold {
  font-family: Metropolis-Bold, serif;
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
