<template>
    <div>
    <v-app-bar app dense color="primary" >
      <v-toolbar-title>{{appt}}</v-toolbar-title> 
      <v-spacer></v-spacer>
      <v-btn icon @click="dark()" color="default"><v-icon>fas fa-moon</v-icon></v-btn>   
   </v-app-bar> 
    </div>
</template>

<script>
export default {
computed:{
      appt(){
        return this.$store.getters.appt
      }
    },
    methods: {
      dark(){
        this.$vuetify.theme.dark=!this.$vuetify.theme.dark
      }
    },
}
</script>
