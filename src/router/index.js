import Vue from 'vue'
import VueRouter from 'vue-router'

import About from "../views/About.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:()=>import("../views/index.vue"),
    children:[{
      path:"/",
      component:()=>import("../views/home/home")
    },{
      path:"/video",
      component:()=>import("../views/video/video")
    },{
      path:"/user",
      component:()=>import("../views/user/user")
    },{
      path:"/page1",
      component:()=>import("../views/other/page1")
    },{
      path:"/page2",
      component:()=>import("../views/other/page2")
    }]
   
  },
  {
    path:"/form",
    component:()=>import("../views/element/form.vue"),
  },
  {
    path:"/table",
    component:()=>import("../views/element/table.vue"),
  },
  {
    path:"/pop",
    component:()=>import("../views/element/Pop.vue"),
  },
  {
    path:"/layout",
    component:()=>import("../views/element/layout.vue")
  },
  {
    path:"/about/:id",
    name:'about',
    component:()=>import("../views/About.vue"),
    // children:[
    //   {
    //     path:"/child",
    //     component:()=>import("../views/Child.vue")
    //   },
      
    // ]
  }
]

const router = new VueRouter({
  routes
})
//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

export default router
