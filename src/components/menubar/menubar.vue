<template slot="title">
          <el-menu mode="vertical" theme="dark" unique-opened :collapse="!iscollapse" router >         
            <template v-for="route in $router.options.routes">
              <template v-if="route.children && route.name">
                <el-submenu :index="route.name">
                  <template slot="title">{{route.name}}</template>
                  <el-menu-item :index="cRoute.name" v-for="(cRoute ,index) in route.children" :route="cRoute" :key="index">
                    <i :class="route.icon"></i>
                    {{cRoute.name}}</el-menu-item>
                </el-submenu>
              </template>
              <template  v-if="!route.children && route.name" >
                <el-menu-item :index="route.name" :route="route" >   <i :class="route.icon"></i> <span slot="title"> {{route.name}}</span>
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
