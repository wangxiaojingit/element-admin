<template>
    <div>
       parent 组件
       <child :msg="'from parent'"  @toParent="toParent" ref="child" aa="aa" msg2="33" id="345"></child>
       <p>拿到子组件传递给父组件的值：{{msg}}</p>
    </div>
</template>

<script>
    import Child from "./Child";
    import bus from "../utils/bus.js"
    export default {
        data(){
            return {
                msg:"par"
            }
        },
        components: {
            Child,
        },
        methods: {
            toParent(val) {
                this.msg=val;
            }
        },
        mounted(){
           // console.log(this.$children);
          // console.log(this.$refs.child);
        //   bus.$on('msg',(val)=>{
        //       this.msg=val;
        //   })

          //console.log(this.$attrs);
        }
    }
</script>

<style lang="scss" scoped>

</style>