<template> 
  <div>
    <!--header-->
    <headers></headers>
    <!-- --> 
    <div class="app-wrapper" :class="{hideSidebar:!menubar_Collapse}">
      <!--左侧工具栏-->
      <menubar  class="sidebar-container"  ></menubar>      
      <div class="main-container">
        <!-- 面包屑 -->
        <sidebar></sidebar>
        <!-- body 内容-->        
        <router-view></router-view>
      </div>   
    </div>  
  </div>   
</template>

<script>
import sidebar from '@/components/sidebar/sidebar'
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
    sidebar,
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
@import "src/styles/mixin.scss";
.app-wrapper {
		//@include clearfix;
		position: relative;
    //position: fixed;    
		height: 100%;
		&.hideSidebar {
			.sidebar-container{
				width:46px;
				overflow: inherit;
			}
			.main-container {
				margin-left: 46px;
			}
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
      top: 50px;
			width: 180px;
			height: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
      padding-top:  50px;
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
    }
}
</style>
