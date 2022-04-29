<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                     <v-card class="mx-1 my-1">
                         <v-date-picker v-model="data.picker" full-width></v-date-picker>
                     </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-text-field label="Text" rounded outlined class="my-4 mx-1" v-model="data.text"></v-text-field>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 >
                    <v-btn x-large class="mx-1 my1" v-for="(item,index) in colors" :key="index" icon :class="item" @click="setadd(item)">
                        <v-icon ></v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        
            <v-layout row wrap xs12>
                <v-flex>
                    <v-btn x-large class="red mx-10 my-2" rounded @click="add()">ADD</v-btn>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex >
                    <v-btn x-large class="red mx-10 my-2" rounded to="/" >Back</v-btn>
                </v-flex>
            </v-layout>
           
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
          data:{
          text:'',
          color:'',
          picker: new Date().toISOString().substr(0, 10),
          },
          colors:['red','black','blue','yellow','green','grey'], 
      }
    },
    methods: {
        setadd(c){
            this.data.color=c
        },
         add(){
             let p=this.data
             this.$store.state.list.push(p)
             this.$router.push({
                 path:'/'
             })
         }
    },
    mounted() {
      this.$store.state.appt ='Add To Do'
    },
  }
</script>