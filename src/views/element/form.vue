<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item :label="item.label"  v-for="(item,index) in formLable" :key="index">
        <el-input v-model="form[item.key]" v-if="item.type=='input'"></el-input>
        <el-select  v-model="form[item.key]" placeholder="请选择活动区域"   v-if="item.type=='select'"  >
           <el-option :label="subItem.label" :value="subItem.value" v-for="(subItem,index2) in item.options" :key="index2"></el-option>
        </el-select>

        <el-date-picker v-if="item.type=='date-picker'" type="date" placeholder="选择日期" v-model="form[item.key]" style="width: 100%;"></el-date-picker>
      </el-form-item>
       <button @click="fn">提交</button>
     
      
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLable: [
        {
          type: "input",
          key: "name",
          label: "活动名字",
        },
        {
          type: "select",
          key: "region",
          label: "活动区域",
          options: [
            {
              label: "区域一",
              value: "上海",
            },
            {
              label: "区域二",
              value: "北京",
            },
          ],
        },
        {
          type: "date-picker",
          key: "date1",
          label: "活动时间",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    fn(){
        console.log(this.form);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>