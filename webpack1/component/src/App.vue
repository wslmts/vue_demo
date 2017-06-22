<template>
  <div id="app">
  <div>
  <label>principal capital</label>
  <input v-model.number="principal">
  </div>
  <div>
  <label>Yearly interestRate</label>
  <input v-model.number="interestRate">
  </div>
  <div>
  <label>Investment length (timeYears)</label>
  <input v-model.number="timeYears">
  </div>
  <div>
  You will gain:
  <output>{{final}}</output>
  </div>
  </div>
</template>

<script>
import compoundInterest from './compoundInterest'
export default {
   name: 'app',
   data () {
   return {
   principal: 0,
   interestRate: 0,
   timeYears: 0
   }
   },
   computed: {
   final () {
   return compoundInterest(
   this.principal,
   this.interestRate,
   this.timeYears
   )
   }
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
