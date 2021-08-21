<template>
  <div class="div-header">
    <b-container>
      <b-row class="text-center" align-v="center" style="height: 500px;">
        <b-col>
          <p class="display-6">Hi there, I'm</p>
          <p class="display-2">Pietro Tamburini</p>
          <div class="blockquote-footer" style="font-size: 20px;">
            <cite title="Source Title">Full Stack Development</cite> Student
          </div>
          <b-button class="btn-secondary">View my projects</b-button>
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
