<template>
  <div class="home">
       home
       {{count}} 
       addtwo:{{addTwo}}
       <!-- <button @click="add">+</button>
       <button @click="addAc">异步</button>
       <button @click="minu" >-</button> -->
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    
  },
  mounted () {
 //console.log(this.$store);
  },

  computed: {
    ...mapState({
        count:(state)=>state.home.count,
    }),
    addTwo(){
      console.log(22)
      console.log(this.$store)
      return this.$store.getters.addTwo;
    }
    // ...mapGetters({
    //   addTwo:(store)=>{
    //      //console.log(getters)
    //      store.getters.home.addTwo
    //   }
    // }),
  
   
  },
  methods:{
    // ...mapMutations({
    //   add:"add",
    //   minu:"minu"
    // }),
   //  ...mapMutations(["add","minu"]),
    //  addAc(){
    //    this.$store.dispatch("Add")
    //  }

    
  },
 
}
</script>
