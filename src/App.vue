<template> 
  <div>
    <!--header-->
    <headers></headers>
    <!-- --> 
    <div class="app-wrapper" :class="{hideSidebar:!menubar_Collapse}">
      <!--左侧工具栏-->
      <menubar  class="sidebar-container"  ></menubar> 
      <!-- 面包屑 -->
      <breadcrumb class="breadcrumb"></breadcrumb> 
      <div class="main-container">        
        <!-- body 内容-->        
        <router-view></router-view>
      </div>   
    </div>  
  </div>   
</template>

<script>
import breadcrumb from '@/components/breadcrumb/breadcrumb'
import menubar from '@/components/menubar/menubar'
import headers from './components/header/header'
export default {
  name: app,
  data() {
    return {
      msg: 'test',
      isCollapse: 'true'
    }
  },
  components: {
    headers,
    breadcrumb,
    menubar
  },
  computed:{
    menubar_Collapse() {
      return this.$store.state.adminleftnavnum;
    }
  }
}
</script>
<style rel="stylesheet/scss"  lang="scss" scoped>

.app-wrapper {
		//@include clearfix;
    position: relative;
    //position: fixed;    
    height: 100%;
    //收缩后的CSS
		&.hideSidebar {
			.sidebar-container{
				width:56px;
				overflow: inherit;
			}
			.main-container {
        margin-left: 56px;
      }
      .breadcrumb{
        margin-left: 56px;
      }
    }
    //左侧菜单区
		.sidebar-container {
			transition: width 0.28s ease-out;
      top: 50px;
      bottom: 0px;
			width: 180px;
			//height: 100%;
      position: fixed;
      //z-index的值决定谁在上面
			z-index: 1001;
      overflow-y: auto;
      //不显示滚动条
 			&::-webkit-scrollbar {display:none}
    }
    //面包屑区
    .breadcrumb{
      padding-top:  50px;
      height: 30px;
      min-height: 100%;
			transition: margin-left 0.28s ease-out;
      margin-left: 180px;
    }
    //主体内容区
		.main-container {
      padding-top:  0px;
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
      margin-left: 180px;
      height:550px;
      overflow-y: auto;
      &::-webkit-scrollbar {display:none}
    }
}
</style>
