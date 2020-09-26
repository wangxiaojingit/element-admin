import Mock from "mockjs";
import homeApi from "./home"
// 延迟响应的时间
Mock.setup({
    timeout: '200-2000'
});

// 页面的相应拦截
Mock.mock(/\/home\/getData/,"get",homeApi.getStatisticalData);
