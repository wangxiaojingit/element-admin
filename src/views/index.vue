<template>
   <el-container class="main">
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header class="el-header">
          <heads></heads>
      </el-header>
      <el-main class="main">
         <mymain class="top"></mymain>
         <router-view class="bottom"></router-view>
      </el-main>
    </el-container> 
  </el-container> 

  
</template>

<script>
import Aside from "../components/Aside";
import heads from "../components/head";
import mymain from "../components/mymain";

export default {
  data() {
    return {
      key: ""
    }
  },
  components: {
    Aside,
    heads,
    mymain
  },
  mounted(){
    this.$http.get("/home/getData").then((res)=>{
       console.log(res);
    })
  }
};
</script>

<style lang="less" scoped>
.el-main{
  height:100%;
  display: flex;
  flex-direction: column;
  background:#efefef;
}
.el-main .top{
  height:30px;

}
.el-main .bottom{
  flex:1;

}
.el-header{
  background:#000;
}
</style>
<style lang="less">
.el-menu{
  border:none;
}
.el-header{
  height:80px!important;
}

</style>