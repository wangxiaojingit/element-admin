

export default {
  state: {
    currentMenu:null,
    tagLists:[{
       label: '首页', type: 'success',
       path:"/"
    }]
  },
  mutations: {
    selectMenu(state,val){
       if(val.label!="首页"){
        state.currentMenu=val;
        var index=state.tagLists.findIndex((item)=>item.label==val.label);
        index==-1? state.tagLists.push(val):"";
       }else{
        state.currentMenu=null;
       }
    },
    //删除标签
    closeTagLists(state,val){
      var index=state.tagLists.findIndex((item)=>item.label==val.label);
      state.tagLists.splice(index,1);
    }
  },
  getters:{
   
  },
  actions: {
  
  },
 
}
