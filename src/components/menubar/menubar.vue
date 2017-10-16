<template slot="title">
          <el-menu mode="vertical" theme="dark" unique-opened :collapse="!iscollapse" router >         
            <template v-for="route in $router.options.routes">
              <!--在route配置里有子菜单-->
              <template v-if="route.children && route.name">
                <el-submenu :index="route.name" v-bind:key="route.name">
                  <template slot="title" >  <i class="el-icon-fa-hand-o-right"></i> <span slot="title"> {{route.name}}</span></template>
                  <!--子菜单显示-->
                  <el-menu-item  :index="cRoute.name" v-for="(cRoute ,index) in route.children" :route="cRoute" v-bind:key="cRoute.name">
                    <i :class="route.icon"></i>{{cRoute.name}}
                  </el-menu-item>                    
                </el-submenu>
              </template>
              <!--在route配置没有子菜单-->
              <template  v-if="!route.children && route.name" >
                <el-menu-item :index="route.name" :route="route" v-bind:key="route.name" > <i :class="route.icon"></i> <span slot="title"> {{route.name}}</span>
                </el-menu-item>                 
              </template>              
            </template>           
          </el-menu>
</template>

<script>
export default  {
  name:'menubar',
  data() {
    return {
      
    }
  },
  computed: {
    iscollapse() {
      return this.$store.state.adminleftnavnum
    }
  }
}	
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 
</style>
