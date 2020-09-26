<template>
  <div>
    <el-tag v-for="tag in tagLists" :key="tag.name" :closable="tag.label!='首页'" :type="tag.type" @close="handleClose(tag)" @click="navfn(tag)" :effect="$route.path==tag.path?'dark':'light'">{{tag.label}}</el-tag>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
  computed:{
     ...mapState({
       tagLists:(state)=> state.tab.tagLists
     })
  },
  data() {
    return {
       
    };
  },
  methods:{
    ...mapMutations(["closeTagLists","selectMenu"]),
    handleClose(tag){
      this.closeTagLists(tag);
      // this.$store.commit("closeTagLists",tag);
    },
    navfn(tag){
       this.$router.push({path:tag.path});
       //让当前点击的tag 就是选中的项
       this.selectMenu(tag);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
<style lang="less">
.el-tag{
  margin-left:20px;
}

</style>