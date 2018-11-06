<template>
  <div id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <!-- <questions/> -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import 'https://fonts.googleapis.com/css?family=Ubuntu';
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Ubuntu', sans-serif;
  background-color: #9c27b0;
}
</style>
