<template>
  <div class="div-skills">
    <h1>
      <vs-tooltip class="mx-auto tooltip-vuesax" warn right>
        <span class="metropolis-bold display-6">Skills</span><b-icon-info-circle scale="0.5" shift-h="-2" shift-v="3"></b-icon-info-circle>
        <template #tooltip>
          <span class="text-black">The values in table are subjective</span>
        </template>
      </vs-tooltip>
    </h1>
    <div class="mx-auto div-table">
      <b-table striped hover :items="items" :fields="filteredFields" bordered fixed dark responsive>
        <template #cell(level)="data">
          <b-progress height="23px" :value="data.value[1]" max="5" variant="purple" v-if="data.value[0]"></b-progress>
          <b-progress height="25px" :value="data.value" max="10" variant="success" :precision="1" v-else-if="!Number.isInteger(data.value)" show-value>
            <b-progress-bar :value="data.value">
              <span class="font-size-80"> {{ data.value }}</span>
            </b-progress-bar>
          </b-progress>
          <b-progress height="25px" :value="data.value" max="10" variant="success" show-value v-else>
            <b-progress-bar :value="data.value">
              <span class="font-size-80"> {{ data.value }}</span>
            </b-progress-bar>
          </b-progress>
        </template>
        <template #cell(type)="data">
          <span class="text-nowrap">{{ data.value }}</span>
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
    <div class="separator"><hr></div>
    <p class="font-size-130">
      JavaScript Algorithms and Data Structures
      <a href="https://www.freecodecamp.org/certification/fcc9706ec7b-335d-4c95-a3bf-e2a56f480491/javascript-algorithms-and-data-structures" target="_blank" class="text-white">Certification</a>
      from FreeCodeCamp
    </p>
    <p class="font-size-100">
      It is possible to view my Start2Impact profile via the following link:
      <a href="https://talent.start2impact.it/profile/pietro-tamburini" target="_blank" class="text-white">My Profile</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Skills',
  data: function () {
    return {
      isMobile: false,
      ignore: ['type'],
      items: [
        { name: 'JavaScript', type: 'Hard Skill', rating: 'Excellent', level: 9.5 },
        { name: 'Vue.js', type: 'Hard Skill', rating: 'Very Good', level: 9 },
        { name: 'HTML5, CSS3, SASS', type: 'Hard Skill', rating: 'Very Good', level: 9 },
        { name: 'Git', type: 'Hard Skill', rating: 'Good', level: 8.5 },
        { name: 'Node.js', type: 'Hard Skill', rating: 'Great', level: 8 },
        { name: 'Python', type: 'Hard Skill', rating: 'Great', level: 8 },
        { name: 'React', type: 'Hard Skill', rating: 'Great', level: 7.5 },
        { name: 'Problem Solving', type: 'Soft Skill', rating: 'Very Good', level: [true, 4.2] },
        { name: 'Precision', type: 'Soft Skill', rating: 'Great', level: [true, 3.6] },
        { name: 'Resilience', type: 'Soft Skill', rating: 'Great', level: [true, 3.9] },
        { name: 'Proactivity', type: 'Soft Skill', rating: 'Good', level: [true, 3.4] }
      ],
      fields: [
        { key: 'name', label: 'Name', tdClass: 'align-middle', stickyColumn: true },
        { key: 'type', label: 'Type', tdClass: 'align-middle' },
        { key: 'rating', label: 'Rating', tdClass: 'align-middle' },
        { key: 'level', label: 'Level', tdClass: 'align-middle' }
      ],
      filteredFields: []
    }
  },
  methods: {
    filterFields (name, type, rating, level) {
      this.filteredFields = []
      if (name) { this.filteredFields.push(this.fields[0]) }
      if (type) { this.filteredFields.push(this.fields[1]) }
      if (rating) { this.filteredFields.push(this.fields[2]) }
      if (level) { this.filteredFields.push(this.fields[3]) }
    },
    checkWidth () {
      if (window.innerWidth < 600) { this.filterFields(true, false, true, true) }
      if (window.innerWidth < 450) { this.filterFields(true, false, false, true) }
      if (window.innerWidth > 600) { this.filterFields(true, true, true, true) }
    }
  },
  created () {
    this.checkWidth()
    addEventListener('resize', this.checkWidth)
    addEventListener('orientationchange', this.checkWidth)
  }
}
</script>

<style src="./Skills.scss" lang="scss" scoped></style>
