<template>
  <div class="p-4 background-projects-component">
    <vs-tooltip success style="width: fit-content; cursor: default" class="mx-auto" right>
      <span class="metropolis-bold display-6">My Portfolio</span><b-icon-info-circle scale="1" shift-h="2" shift-v="15"></b-icon-info-circle>
      <template #tooltip>
        Idea of projects from Start2Impact <img height="16" :src="getImage('Icon-Start2Impact', 'png')" alt="">
      </template>
    </vs-tooltip>
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2" cols-xl="4">
      <b-col class="mt-3 mb-3"> <!-- CRYPTO STATS -->
        <vs-card type="1" align="center" @click="openUrl('https://cryptostats.pietro-tamburini.it/')">
          <template #title>
            <h3>Crypto Stats</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/Crypto-Stats-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Here you can find all the information you are looking for about the world of cryptocurrencies. <br> Data from CoinMarketCap
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' href="https://vuejs.org/" blank gradient><b-img style="height: 13px" :src="getImage('projects/Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(56,97,251)' href="https://coinmarketcap.com/" blank gradient><b-img style="height: 13px" :src="getImage('projects/CoinMarketCap-Logo', 'svg')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- CITY POLLUTION -->
        <vs-card type="1" align="center" @click="openUrl('https://citypollution.pietro-tamburini.it/')">
          <template #title>
            <h3>City Pollution</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/City-Pollution-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              You will be able to find out the AQI, "Air Quality Index", of most cities around the world. <br> Data from AQICN
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' href="https://vuejs.org/" blank gradient><b-img style="height: 13px" :src="getImage('projects/Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(0,134,200)' href="https://aqicn.org/map/world/" blank gradient style="padding-top: 0;"><span style="font-size: 10px;">AQICN</span></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- FIRES MAP -->
        <vs-card type="1" align="center" @click="openUrl('https://firesmap.pietro-tamburini.it/')">
          <template #title>
            <h3>Fires Map</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/Fires-Map-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Find out about the fires that occurred around the world between 21-28 August 2020 <br> Map by Leaflet
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' href="https://vuejs.org/" blank gradient><b-img style="height: 13px" :src="getImage('projects/Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(243,241,233)' href="https://leafletjs.com/" blank gradient><b-img style="height: 13px" :src="getImage('projects/Leaflet-Logo', 'png')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- TIC TAC TOE -->
        <vs-card type="1" align="center" @click="openUrl('https://tictactoe.pietro-tamburini.it//#/pvp')">
          <template #title>
            <h3>Tic Tac Toe</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/Tic-Tac-Toe-Background', 'png')" alt="">
          </template>
          <template #text>
            <p>
              Play the famous Tic Tac Toe game
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' href="https://vuejs.org/" blank gradient><b-img style="height: 13px" :src="getImage('projects/Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
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
    },
    openUrl (url) {
      window.open(url)
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
