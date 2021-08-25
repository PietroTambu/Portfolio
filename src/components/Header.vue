<template>
  <div class="div-header" :style="inlineBgImage('Code-JavaScript-Background', 'jpg')">
    <b-container>
      <b-row class="text-center" align-v="center" style="height: 500px;">
        <b-col>
          <p class="display-6" style="font-family: playballregular, serif">Hello there, I'm</p>
          <p class="display-3 metropolis-bold" style="letter-spacing: 0.0388235em;">PIETRO TAMBURINI</p>
          <div class="blockquote-footer" style="font-size: 20px; color: rgba(255,255,255,0.7)">
            <cite title="Source Title">Full Stack Development Student</cite>
          </div>
          <vs-button class="mx-auto mt-4 gulim050" @click="$emit('scrollTo','projects')" color='#17a2b8' gradient>View my Projects</vs-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    inlineBgImage (name, extension) {
      const bgImage = require('@/assets/' + name + '.' + extension)
      return { backgroundImage: `url("${bgImage}")` }
    }
  }
}
</script>

<style scoped>
.div-header {
  width: 100%;
  height: 500px;
  background-color: #2c3e50;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
}
</style>
