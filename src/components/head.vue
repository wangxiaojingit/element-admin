<template>
  <div class="headMain">
    <div class="col-left">
      <!-- 主页图标 -->
      <el-button type="primary" icon="el-icon-menu" circle></el-button>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentMenu" :to="currentMenu.path">{{currentMenu.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="col-right">
      <!-- 下拉菜单 -->
      <el-dropdown>
        <!-- <el-button type="primary">
          
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button> -->
        <img class="photo" :src="photoImg" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState({
            currentMenu:(state)=>state.tab.currentMenu
        })
    },
    data() {
        return {
            photoImg:require("../assets/photo.jpeg") 
        }
    },
};
</script>

<style lang="less" scoped>
.headMain {
   display: flex;
   height:100%;
   justify-content: space-between;
   align-items: center;
   .col-left{
       display:flex;
   }
   .col-right{
       .photo{width:40px;}
   }
}
</style>
<style lang="less">

.el-breadcrumb {
    display: flex;
    align-items: center;
    margin-left:20px;
}    
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color:#fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color:deepskyblue;
}
</style>