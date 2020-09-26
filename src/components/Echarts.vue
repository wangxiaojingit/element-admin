<template>
  <div class="echartsBox">
    <div class="main" ref="echart">哈哈哈</div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    orderData: {
      type: Object,
      default() {
        return {
          xAxis: [],
          series: [],
        };
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.fn();
  },
  computed: {
    option() {
      // 如果需要y轴坐标
      if (this.isAxisChart) {
        return {
          xAxis: { data: this.orderData.xData },
          series: this.orderData.series,
          yAxis: {
            type: "value",
          },
        };
      }else{
        return {
           series: this.orderData.series,
        }
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    fn() {
      console.log(55);
      console.log(this.orderData);
      console.log(55);
      var ss = echarts.init(this.$refs.echart);
      console.log(this.option);
      ss.setOption(this.option);
    },
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