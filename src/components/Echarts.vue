<template>
  <div class="echartsBox">
    <div class="main" ref="echart">哈哈哈</div>
  </div>
</template>

<script>
import echarts from "echarts";


export default {
  props:["orderData"],
  mounted() {
   
      this.fn();
   
   
  },
  data() {
    return {
      option: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  methods: {
    fn(){
    console.log(55);
    console.log(this.orderData);
    console.log(55); 
     var ss= echarts.init(this.$refs.echart);
     // ss.setOption(this.orderData);
    }
  },
};
</script>

<style lang="less" scoped>
.echartsBox {
  height: 100%;
  .main {
    height: 100%;
  }
}
</style>