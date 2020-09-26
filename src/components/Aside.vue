<template>
  <div class="asideM">
    <el-menu 
      default-active="2"
      class="el-menu"
      background-color="#0079ba"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
     
      <el-menu-item :index="item.path" v-for="item in nomenuDate" :key="item.path" @click="selectMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu index="1"  v-for="(item,index) in hasmenuDate" :key="index">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subitem.path" @click="selectMenu(subitem)" v-for="subitem in item.children" :key="subitem.path">{{subitem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  computed:{
    nomenuDate(){
      return this.menuDate.filter((item)=>!item.children)
    },
    hasmenuDate(){
      return this.menuDate.filter((item)=>item.children)
    },
  },
  mounted(){
   
  },
  data() {
    return {
      menuDate: [{
           path:"/",
           label:"首页",
           name:"home",
           icon:"s-home"
      },
      {
         path:"/video",
         label:"视频管理",
         icon:"video-play"
      },
      {
         path:"/user",
         label:"用户管理",
         icon:"user"
      },
      {
         label:"其它",
         icon:"user",
         children:[{
            path:"/page1",
            label:"页面1",
            icon:"setting"
         },{
            path:"/page2",
            label:"页面2",
            icon:"setting"
         }]
      }
      ]
    }
  },
  methods:{
    selectMenu(item){
        this.$router.push(item.path);
        this.$store.commit("selectMenu",item)
    }
  }
  
};
</script>

<style lang="less" scoped>
  .el-menu{
    height:100vh;
  }
</style>