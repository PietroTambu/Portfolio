<template>
  <div class="background-fdfdfe">
    <vs-tooltip class="mx-auto tooltip-vuesax my-3" success right>
      <span class="metropolis-bold display-6">My Portfolio</span><b-icon-info-circle scale="1" shift-h="2" shift-v="15"></b-icon-info-circle>
      <template #tooltip>
        Personal Project - not productive but fun to watch
      </template>
    </vs-tooltip>
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2" cols-xl="4" class="mx-3">
      <b-col class="mt-3 mb-3"> <!-- CRYPTO STATS -->
        <vs-card type="1" align="center" @click="openUrl('https://cryptostats.pietro-tamburini.it')">
          <template #title>
            <h3>Crypto Stats [ Vue.js ]</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/Crypto-Stats-Background', 'png')" alt="Crypto Stats Background">
          </template>
          <template #text>
            <p>
              Here you can find all the information you are looking for about the world of cryptocurrencies. <br> Data from CoinMarketCap
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' href="https://vuejs.org/" blank gradient><b-img height="13" :src="getImage('projects/Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(56,97,251)' href="https://coinmarketcap.com/" blank gradient><b-img height="13" :src="getImage('projects/CoinMarketCap-Logo', 'svg')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- REACT BOOKS -->
        <vs-card type="1" align="center" @click="openUrl('https://books.pietro-tamburini.it')">
          <template #title>
            <h3>Books [ React ]</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/Books-React-Background', 'png')" alt="Books React Background">
          </template>
          <template #text>
            <p>
              Search for a book, Data from <i>Google Books</i>
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(255,255,255)' href="https://reactjs.org/" blank gradient><b-img height="13" :src="getImage('projects/React-Icon', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button color='rgb(255,255,255)' href="https://developers.google.com/books" blank gradient><b-img height="12" :src="getImage('projects/Google-Developer', 'png')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- CITY POLLUTION -->
        <vs-card type="1" align="center" @click="openUrl('https://citypollution.pietro-tamburini.it/')">
          <template #title>
            <h3>City Pollution [ Vue.js ]</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/City-Pollution-Background', 'png')" alt="City Pollution background">
          </template>
          <template #text>
            <p>
              You will be able to find out the AQI, "Air Quality Index", of most cities around the world. <br> Data from AQICN
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(66,185,131)' href="https://vuejs.org/" blank gradient><b-img height="13" :src="getImage('projects/Vue-JS-Logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(121,82,179)' href="https://getbootstrap.com/" blank gradient><b-icon-bootstrap></b-icon-bootstrap></vs-button>
            <vs-button class="pt-0" color='rgb(0,134,200)' href="https://aqicn.org/map/world/" blank gradient><span class="font-size-62">AQICN</span></vs-button>
          </template>
        </vs-card>
      </b-col>
      <b-col class="mt-3 mb-3"> <!-- MOS -->
        <vs-card type="1" align="center" @click="openNotification('top-right')">
          <template #title>
            <h3 style="white-space: nowrap">Maxwell Orario Studenti [ Flutter ]</h3>
          </template>
          <template #img>
            <img :src="getImage('projects/MOS-Background', 'jpg')" alt="Maxwell Orario Studenti">
          </template>
          <template #text>
            <p>
              School timetable of the students of the IIS J.C. Maxwell Milan
            </p>
          </template>
          <template #interactions>
            <vs-button color='rgb(250,250,250)' href="https://flutter.dev/" blank gradient><b-img height="13" :src="getImage('projects/flutter-logo', 'svg')"></b-img></vs-button>
            <vs-button color='rgb(250,250,250)' href="https://play.google.com/console/developers" blank gradient><b-img height="13" :src="getImage('projects/Google_Play_Arrow_logo', 'png')"></b-img></vs-button>
          </template>
        </vs-card>
      </b-col>
    </b-row>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  methods: {
    getImage (name, extension) {
      return require(`@/assets/${name}.${extension}`)
    },
    openUrl (url) {
      window.open(url)
    },
    openNotification (position = null) {
      this.$vs.notification({
        color: 'primary',
        position,
        title: 'Content Not Available',
        text: 'We are sorry but the content is not available on Google Play because its usefulness has expired'
      })
    }
  }
}
</script>

<style src="./Projects.scss" lang="scss" scoped></style>
