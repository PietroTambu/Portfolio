<template>
  <div class="background-fdfdfe p-4">
    <b-row align-v="center" cols="1" cols-sm="1" cols-md="1" >
      <b-col lg="7" xl="8" class="my-3" align="center">
        <vs-card type="7">
          <template #title>
            <h2><b>About Me</b></h2>
          </template>
          <template #text>
            <p v-for="item in aboutMeData" :key="item">{{ item }}</p>
          </template>
        </vs-card>
      </b-col>
      <b-col lg="5" xl="4" align="center" class="my-3">
        <vs-card type="6">
          <template #title>
            <h2 class="letter-spacing-0-05"><b>Pietro Tamburini</b></h2>
          </template>
          <template #text>
            <p>Italian Boy <b-img height="18" :src="getImage('Icon-Italy-Flag', 'png')"></b-img></p>
            <p>{{ myAge }} Years Old <b-img height="18" :src="getImage('Icon-Years', 'png')"></b-img></p>
            <p>Informatics at Bicocca University <b-img height="18" :src="getImage('Icon-School', 'png')"></b-img></p>
            <p>Milan - 20128 <b-img height="18" :src="getImage('Icon-Location-Marker', 'png')"></b-img></p>
            <p>Love Coding <b-img height="18" :src="getImage('Icon-Coding', 'png')"></b-img></p>
          </template>
        </vs-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
  props: {
    aboutMeData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      myAge: Number
    }
  },
  methods: {
    getImage (name, extension) {
      return require(`@/assets/${name}.${extension}`)
    },
    calculate_age (dob) {
      var monthDiff = Date.now() - dob.getTime()

      var ageDt = new Date(monthDiff)

      var year = ageDt.getUTCFullYear()

      return Math.abs(year - 1970)
    }
  },
  mounted () {
    this.myAge = this.calculate_age(new Date(2003, (11) - 1, 28))
  }
}

</script>
