<template>
  <el-row class="home" :gutter="20">
    <el-col class="left" :span="6">
      <div class="con">
        <div class="user">
          <!-- 用户信息 -->
          <div class="userMy">
            <img class="photo" :src="photo" alt="" />
            <div class="userInfo">
              <p class="name">Nike</p>
              <p class="card">超级管理员</p>
            </div>
          </div>
          <!-- 登录信息 -->
          <div class="logIn">
            <p>上次登录时间：<span>2018-8-12</span></p>
            <p>上次登录地点：<span>北京</span></p>
          </div>
        </div>
        <div class="message">
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column
                show-overflow-tooltip
                :prop="key"
                :label="value"
                v-for="(value, key) in tableLable"
                :key="key"
              >
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </el-col>
    <el-col class="right" :span="18">
      <div class="con">
        <div class="top">
          <div class="item" v-for="(item, index) in countData" :key="index">
            <div class="bd">
              <div class="icon" :class="`el-icon-${item.icon}`"></div>
              <div class="icon-right">
                <p>{{ item.value }}</p>
                <p class="p2">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <echarts
            v-if="echartData.order.series.length"
            :orderData="echartData.order"
            :name="message"
          ></echarts>
        </div>
        <div class="bottom">
          <div class="user">
            <echarts></echarts>
          </div>
          <div class="course">
            <echarts></echarts>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import echarts from "../../components/Echarts";
export default {
  created() {
    this.$http.get("/home/getData").then((res) => {
      var data = res.data.data;
      this.tableData = data.tableData;
      console.log(data);
      //order 的x 轴数据;
      this.echartData.order.xData = data.orderData.date;
      // 取出series 中的keys值
      var keys = Object.keys(data.orderData.data[0]);
      /* 
      ES6:5267.53
      React:2319.4
      Redis:5957
      springboot:4894
      vue:1501.1
      wechat:748.2
      */
      // {
      //     name: 'Forest',
      //     type: 'bar',
      //     barGap: 0,
      //     label: labelOption,
      //     data: [320, 332, 301, 334, 390]
      // },
      keys.forEach((key) => {
        this.echartData.order.series.push({
          name: key == "wechat" ? "微信小程序" : key,
          data: data.orderData.data.map((item) => {
            return item[key];
          }),
          type: "line",
        });
      });
    });
  },
  data() {
    return {
      message: "hello",
      photo: require("../../assets/photo.jpeg"),
      tableData: [],
      tableLable: {
        name: "课程",
        todayBuy: "日销售",
        monthBuy: "月销售",
        totalBuy: "总销售",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1024,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 105,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 7888,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 882,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1025,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      //echart 图表
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
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
  components: {
    echarts,
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  .left {
    padding: 20px;
    color: #999;
    .con {
      height: 100%;
      display: flex;
      flex-direction: column;
      .user {
        background: #fff;
        margin-bottom: 20px;
        padding: 20px;
        .userMy {
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
          .photo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-right: 20px;
          }
        }
        .logIn {
          padding: 10px;
          p {
            line-height: 30px;
          }
        }
      }
      .message {
        flex: 10;
        background: #fff;
      }
    }
  }
  .right {
    padding: 20px;
    .con {
      height: 100%;
      display: flex;
      flex-direction: column;
      .top {
        height: 300px;
        flex: 6;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .item {
          width: 33.33%;
          height: 80px;

          padding-right: 10px;
          box-sizing: border-box;

          .bd {
            background: #fff;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .icon {
            width: 80px;
            height: 80px;
            line-height: 80px;
            background: darkturquoise;
            margin-right: 10px;
            font-size: 50px;
            color: red;
            text-align: center;
            &-right .p2 {
              color: #999;
              font-size: 14px;
              margin-top: 5px;
            }
          }
        }
      }
      .center {
        margin: 30px 0;
        background: #fff;
        flex: 8;
      }
      .bottom {
        flex: 10;
        display: flex;
        .user {
          flex: 1;
          margin-right: 20px;
          box-sizing: border-box;
          background: #fff;
        }
        .course {
          flex: 1;
          background: #fff;
        }
      }
    }
  }
}
</style>