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
      <b-table striped hover :items="skillsData" :fields="filteredFields" bordered fixed dark responsive>
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
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skillsData: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      isMobile: false,
      ignore: ['type'],
      fields: [
        { key: 'name', label: 'Name', tdClass: 'align-middle', stickyColumn: true },
        { key: 'type', label: 'Type', tdClass: 'align-middle' },
        { key: 'rating', label: 'Rating', tdClass: 'align-middle' },
        { key: 'level', label: 'Level', tdClass: 'align-middle' }
      ],
      filteredFields: [],
      skill: []
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
