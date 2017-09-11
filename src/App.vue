<template>
    <!--<headers></headers>-->
    <div class="app-wrapper" :class="{hideSidebar:!menubar}">
    <!--
      <aside class="db-menu-wrapper">
          <el-menu class="db-menu-bar"  router >         
            <template v-for="route in $router.options.routes">
              <template v-if="route.children && route.name">
                <el-submenu :index="route.name">
                  <template slot="title">{{route.name}}</template>
                  <el-menu-item :index="cRoute.name" v-for="(cRoute ,index) in route.children" :route="cRoute" :key="index">
                    <i :class="route.icon"></i>
                    {{cRoute.name}}</el-menu-item>
                </el-submenu>
              </template>
              <template v-if="!route.children && route.name">
                <el-menu-item :index="route.name" :route="route">  <i :class="route.icon"></i> {{route.name}}</el-menu-item>                 
              </template>              
            </template>           
          </el-menu>        
      </aside>
      -->
      <menubar  class="sidebar-container"  ></menubar>
       <!-- content start -->
        <div class="main-container">
           <sidebar></sidebar>        
           <router-view></router-view>
        </div>
        <!-- content end -->     
    </div>     
</template>

<script>
import sidebar from '@/components/sidebar/sidebar'
import menubar from '@/components/menubar/menubar'
import headers from './components/header/header'
//import test from './components/test/test'
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
    menubar() {
      return this.$store.state.adminleftnavnum;
    }
  }
}
</script>
<style rel="stylesheet/scss"  lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
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
			width: 180px;
			height: 100%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
    }
}
</style>
