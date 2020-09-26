<template>
  <div>
      about
      <p>动态路由参数：{{$route.params.id}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
     mounted(){
       console.log(this.$route)
     }
  }
</script>

<style lang="scss" scoped>

</style>
