<template>
  <div class="div-bio">
    <h1>About Me</h1>
    <p></p>
    <p style="font-size: 1.4rem">I am a 17 year old boy and I live in Milan.</p>
    <p style="font-size: 1.4rem">
      I am attending the 5th year of the Maxwell
      <b-icon-info-circle scale="0.75" shift-h="-2" shift-v="4" v-b-popover.hover.topright="{ variant: 'info',  content: 'Liceo Scientifico - Scienze Applicate', title:'Area of study:' }">
      </b-icon-info-circle>High School of Applied Sciences in Milan.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Biography'
}
</script>

<style scoped>
.div-bio {
  border: 2px solid black;
  padding: 5px;
  height: fit-content;
  background-color: #fdfdfe;
}
</style>
