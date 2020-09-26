<template>
    <div>
       child 组件
       <!-- <p>拿到父组件传递的值：{{msg}}</p>
       <button @click="toParent(3)">子组件把数据传递给父组件</button> -->
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default:""
            }
        },
        methods: {
            toParent(val) {
                this.$emit("toParent",val)
               
            }
        },
        mounted(){
            console.log(1);
            console.log(this.$attrs)
        }
    }
</script>

<style lang="scss" scoped>

</style>