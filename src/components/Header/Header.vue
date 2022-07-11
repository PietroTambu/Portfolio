<template>
  <div class="div-header" :style="inlineBgImage('Code-JavaScript-Background', 'jpg')">
    <b-container>
      <b-row class="text-center" align-v="center" style="height: 500px;">
        <b-col>
          <p class="display-6" style="font-family: playballregular, serif">Hello there, It's</p>
          <p class="display-3 metropolis-bold letter-spacing-0-038">PIETRO TAMBURINI</p>
          <div class="blockquote-footer">
            <cite title="Source Title">
              {{ headerData }}
            </cite>
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
  props: {
    headerData: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    inlineBgImage (name, extension) {
      const bgImage = require(`@/assets/${name}.${extension}`)
      return { backgroundImage: `url("${bgImage}")` }
    }
  },
  mounted () {
  }
}
</script>

<style src="./Header.scss" lang="scss"></style>
