<template>
  <div class="div-skills">
    <h1 style="white-space: nowrap;">
      Skills<b-icon-info-circle scale="0.6" shift-h="-2" shift-v="4"
        v-b-popover.hover.top="{ variant: 'danger',  content: 'The values in the table are subjective'}">
      </b-icon-info-circle>
    </h1>
    <div class="mx-auto div-table">
      <b-table striped hover :items="items" :fields="fields" bordered dark fixed responsive>
        <template #cell(level)="data">
          <b-progress height="20px" :value="data.value[1]" max="5" variant="purple" v-if="data.value[0]"></b-progress>
          <b-progress height="20px" :value="data.value" max="10" variant="success" :precision="1" v-else-if="!Number.isInteger(data.value)" show-value></b-progress>
          <b-progress height="20px" :value="data.value" max="10" variant="success" show-value v-else></b-progress>
        </template>
        <template #row-details="data">
          <b-tr v-if="data.type === 'Soft Skill'">
            <b-th><span class="sr-only">Name</span></b-th>
            <b-th variant="secondary">Type 1</b-th>
            <b-th variant="primary" colspan="2">insieme</b-th>
          </b-tr>
        </template>

      </b-table>
    </div>
    <p style="font-size: 1rem">
      It is possible to view the Start2Impact profile via the following link:
      <a href="https://talent.start2impact.it/profile/pietro-tamburini" target="_blank" class="text-white">My Profile</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data: function () {
    return {
      items: [
        { name: 'JavaScript', type: 'Hard Skill', rating: 'Very Good', level: 8.5 },
        { name: 'Vue.js', type: 'Hard Skill', rating: 'Great', level: 7.5 },
        { name: 'HTML & CSS', type: 'Hard Skill', rating: 'Great', level: 7 },
        { name: 'PHP & MySQL', type: 'Hard Skill', rating: 'Good', level: 6 },
        { name: 'Python', type: 'Hard Skill', rating: 'Good', level: 6 },
        { name: 'C', type: 'Hard Skill', rating: 'Ok', level: 4 },
        { name: 'Problem Solving', type: 'Soft Skill', rating: 'Very Good', level: [true, 4] },
        { name: 'Precision', type: 'Soft Skill', rating: 'Good', level: [true, 2.5] },
        { name: 'Resilience', type: 'Soft Skill', rating: 'Great', level: [true, 3.5] },
        { name: 'Proactivity', type: 'Soft Skill', rating: 'Good', level: [true, 2.5] }
      ],
      fields: [
        { key: 'name', label: 'Name', tdClass: 'align-middle', stickyColumn: true },
        { key: 'type', label: 'Type', tdClass: 'align-middle' },
        { key: 'rating', label: 'Rating', tdClass: 'align-middle' },
        { key: 'level', label: 'Level', tdClass: 'align-middle' }
      ]
    }
  }
}
</script>

<style lang="scss">
/* @import "../bootstrap/scss/custom.scss"; */

.div-skills {
  border: 2px solid black;
  padding: 5px;
  height: fit-content;
  background-color: #2b2b2c;
  color: white;
}
.div-table {
  width: 85%;
  max-width: 750px;
}
</style>
