<template>
  <div>
    <Header @scrollTo="goto($event)" :headerData="data.headerTitle" />
    <AboutMe :aboutMeData="data.aboutMe"/>
    <Skills :skillsData="data.skill"/>
    <Projects id="projects"/>
    <Contacts />
  </div>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'

import Header from '@/components/Header/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills/Skills.vue'
import Projects from '@/components/Projects/Projects.vue'
import Contacts from '@/components/Footer/Footer.vue'
import helpers from '@/js/helpers'

export default {
  name: 'Home',
  components: {
    Header,
    AboutMe,
    Skills,
    Projects,
    Contacts
  },
  data: function () {
    return {
      loading: '',
      data: {}
    }
  },
  methods: {
    goto (refName) {
      const firstScrollTo = scroller()
      firstScrollTo('#' + refName)
    },
    openLoading () {
      this.loading = this.$vs.loading({
        background: '#2b2b2c',
        color: '#000',
        type: 'circles'
      })
    },
    closeLoading () {
      try {
        this.loading.close()
      } catch { console.log('Already Loaded') }
    }
  },
  async created () {
    this.openLoading()
    this.data = await helpers.getData()
    setTimeout(() => {
      this.closeLoading()
    }, 6000)
  },
  mounted () {
    setTimeout(() => {
      this.closeLoading()
    }, 1000)
  }
}

</script>
