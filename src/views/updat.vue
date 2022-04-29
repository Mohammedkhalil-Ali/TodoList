<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                     <v-card class="mx-1 my-1">
                         <v-date-picker v-model="data.picker" full-width :color="data.color"></v-date-picker>
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
        
            <v-layout row wrap>
                <v-flex xs6>
                    <v-btn x-large class="red mx-10 my-2" rounded @click="del()">Remove</v-btn>
                </v-flex>
                <v-spacer></v-spacer>

                <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >   
      
                <v-card>
                    <v-card-title class="text-h5">
                    Update
                    </v-card-title>
                    <v-card-text>Do you want to update this todo ?</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Disagree
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="updateFile()"
                    >
                        Agree
                        </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>


                <v-flex xs6>
                    <v-btn x-large class="red mx-10 my-2" rounded @click="dialog=true">Update</v-btn>
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
          dialog: false,
      }
    },
    computed:{
        itemm(){
           let check= this.$store.getters.list.filter(f=>{
                return f.text==this.text
            })
            return check
        },
        list(){
        return this.$store.getters.list
      }}
        ,
    methods: {
        setadd(c){
            this.data.color=c
        },
        updateFile(){
            this.$store.state.list.color=this.data.color
            this.$store.state.list.picker=this.data.picker
            this.$store.state.list.text=this.data.text
            
            this.$router.push({
                path:'/'
            })
        },
        del(){
            let name=this.data.text
            this.$store.state.list=this.$store.state.list.filter(f=>{
                return f.text!=name
            })
            this.$router.push({
                path:'/'
            })
        }
    },
    mounted() {
        this.text=this.$route.params.name
        this.data=this.itemm[0]
        return this.$store.state.appt=this.data.text
    }
  }  
  
</script>