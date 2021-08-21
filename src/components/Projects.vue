<template>
  <div class="p-4 background-projects-component">
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2" cols-xl="4">
      <b-col class="mt-3 mb-3"> <!-- CRYPTO STATS -->
        <vs-card type="1" align="center">
          <template #title>
            <h3>Crypto Stats</h3>
          </template>
          <template #img>
            <img :src="getImage('Crypto-Stats-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <vs-button color='rgb(59,222,200)' gradient>Visit</vs-button>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' gradient><b-img style="height: 13px" :src="getImage('Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(56,97,251)' gradient><b-img style="height: 13px" :src="getImage('CoinMarketCap-Logo', 'svg')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- CITY POLLUTION -->
        <vs-card type="1" align="center">
          <template #title>
            <h3>City Pollution</h3>
          </template>
          <template #img>
            <img :src="getImage('City-Pollution-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' gradient><b-img style="height: 13px" :src="getImage('Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(0,134,200)' gradient style="padding-top: 0;"><span style="font-size: 10px;">AQICN</span></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- FIRES MAP -->
        <vs-card type="1" align="center">
          <template #title>
            <h3>Fires Map</h3>
          </template>
          <template #img>
            <img :src="getImage('Fires-Map-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' gradient><b-img style="height: 13px" :src="getImage('Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(243,241,233)' gradient><b-img style="height: 13px" :src="getImage('Leaflet-Logo', 'png')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- TIC TAC TOE -->
        <vs-card type="1" align="center">
          <template #title>
            <h3>Tic Tac Toe</h3>
          </template>
          <template #img>
            <img :src="getImage('Tic-Tac-Toe-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' gradient><b-img style="height: 13px" :src="getImage('Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
          </template>
        </vs-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  methods: {
    getImage (name, extension) {
      return require('@/assets/' + name + '.' + extension)
    }
  },
  mounted () {
    this.$vs.setTheme('light')
  }
}
</script>

<style>
.background-projects-component {
  background-color: #fdfdfe;
}
</style>
