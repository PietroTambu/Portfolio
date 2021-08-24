<template>
  <div class="div-bio p-4">
    <b-row align-v="center" cols="1" cols-sm="1" cols-md="1" >
      <b-col lg="7" xl="8" class="my-3" align="center">
        <vs-card type="7" about-me-description>
          <template #title>
            <h2><b>About Me</b></h2>
          </template>
          <template #text>
            <p>Hi I am Pietro Tamburini, a self-taught Full stack development student. I am {{ myAge }} years old and I live in Milan where I am attending my last and fifth year of Scientific High School of Applied Sciences.<br>
              I have start coding when I was twelve with Visual Basic, until I was sixteen I played with Macros (.lua .ahk) and C. Then I started a Full Stack Developer course.<br>
              Since I was young I have always appreciated the logic and complexity of programming and currently I am interested in the world of blockchain technology.</p>
          </template>
        </vs-card>
      </b-col>
      <b-col lg="5" xl="4" align="center" class="my-3">
        <vs-card type="6">
          <template #title>
            <h2 style="letter-spacing: 0.05rem"><b>Pietro Tamburini</b></h2>
          </template>
          <template #text>
            <p>Italian Boy <b-img height="18" :src="getImage('Icon-Italy-Flag', 'png')"></b-img></p>
            <p>{{ myAge }} Years Old <b-img height="18" :src="getImage('Icon-Years', 'png')"></b-img></p>
            <p>Scientific High School of A.S. <b-img height="18" :src="getImage('Icon-School', 'png')"></b-img></p>
            <p>Milano zone 2 - 20128 <b-img height="18" :src="getImage('Icon-Location-Marker', 'png')"></b-img></p>
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
  data: function () {
    return {
      myAge: 17
    }
  },
  methods: {
    getImage (name, extension) {
      return require('@/assets/' + name + '.' + extension)
    }
  },
  created () {
    const birthday = new Date(2003, 11, 28, 0, 0, 0)
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    this.myAge = Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

</script>

<style scoped>
.about-me-description {
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px 30px 20px 30px;
  min-height: 153px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
