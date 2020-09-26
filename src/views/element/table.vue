<template>
  <el-table :data="tableData" stripe border height="200" style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column v-for="(value,key) in tableLable " :key="key" :prop="key" :label="value" width="180" show-overflow-tooltip></el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableLable:{
          date:"日期",
          name:"姓名",
          address:"地址"
      }
    };
  },
  methods:{
      handleClick(index,row) {
        console.log(index,row);
      },
        indexMethod(index) {
        return index * 2;
      }
  }
};
</script>

<style lang="less" scoped>
  body{
      background-color:@blue;
  }
</style>