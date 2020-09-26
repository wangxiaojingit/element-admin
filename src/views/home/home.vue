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
        <div class="center"></div>
        <div class="bottom"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  created() {
    this.$http.get("/home/getData").then((res) => {
      this.tableData = res.data.data.tableData;
    });
  },
  data() {
    return {
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
    };
  },
};
</script>

<style lang="less" scoped>
// @import "../../assets/css/home.less";
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
        flex: 5;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .item {
          width: 33.33%;
          height: 80px;
         
         padding-right:10px;
         box-sizing: border-box;
          
          .bd{
           background: #fff;
           width:100%;
           height:100%;
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
        background: blue;
        flex: 10;
      }
      .bottom {
        flex: 5;
        background: blue;
      }
    }
  }
}
</style>