<template>
<span id="shaker" class="shake">
<link rel="stylesheet" type="text/css"
href="https://csshake.surge.sh/csshake.min.css">
<slot></slot>
</span>
</template>


<script>
export default {
name: 'shaker'
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
