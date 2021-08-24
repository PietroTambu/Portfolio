<template>
  <div class="home">
    <Header @scrollTo="goto($event)" />
    <AboutMe />
    <Skills />
    <Projects id="projects"/>
    <Contacts />
  </div>
</template>

<script>
import { scroller } from 'vue-scrollto/src/scrollTo'

import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contacts from '@/components/Contacts.vue'

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
      loading: ''
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
  created () {
    this.openLoading()
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
