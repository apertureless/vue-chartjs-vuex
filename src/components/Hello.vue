<template>
  <div class="hello">
    <line-chart :chart-data="datasetsfull" />
    <button @click="addData()">Add data</button>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  components: {LineChart},
  computed: {
    datasetsfull () {
      return {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: this.singleData
          }
        ]
      }
    },
    ...mapGetters([
      'singleData'
    ])
  },
  methods: mapActions([
    'addData'
  ]),
  mounted () {
    console.log(this.singleData)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
