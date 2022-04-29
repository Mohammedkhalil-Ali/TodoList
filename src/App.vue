<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
    <router-view></router-view>
  </v-main>
  </v-app>
</template>

<script>
  import Navbar from './components/nav.vue'

export default {
  name: 'App',
  components:{
    Navbar
  },
  data: () => ({
  }),
};
</script>
