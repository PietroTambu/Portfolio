<template>
  <div class="home">
    <Header />
    <Bio />
    <Skills />
    <Projects />
    <!-- <Vuesax /> -->
    <Contacts />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Bio from '@/components/Biography.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contacts from '@/components/Contacts.vue'
// import Vuesax from '@/components/Vuesax.vue' -->

export default {
  name: 'Home',
  components: {
    Header,
    Bio,
    Skills,
    Projects,
    Contacts
  }
}

</script>
