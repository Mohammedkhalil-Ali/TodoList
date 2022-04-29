<template>
<div class="Home"> 
<v-container> 
  <v-btn
  elevation="2"
  large
  fab
  fixed
  right
  bottom
  to="Addto"
><v-icon>mdi-plus</v-icon></v-btn>
  <v-layout row wrap>
    <v-flex lg3 xs12 v-for="(item,index) in list" :key="index">
      <v-card class="my-1 mx-1"   :color="item.color" :to="'/upda/'+item.text">
        <v-card-title primary-title>{{item.text}}</v-card-title>
        <v-card-text>{{item.picker}}</v-card-text>
      </v-card>
    </v-flex>  
  </v-layout>
</v-container>
</div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        
      }
    },
    components: {

    },
    computed:{
      list(){
        return this.$store.getters.list
      },
      appt(){
        return this.$store.getters.appt
      }
    },
    mounted() {
      this.$store.state.appt ='ToDo'
    },
  }
</script>
