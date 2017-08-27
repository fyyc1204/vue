<template>
 <section class="db">
    <headers></headers>
    <div class="db-body">
      <aside class="db-menu-wrapper">
          <el-menu class="db-menu-bar"  router >         
            <template v-for="route in $router.options.routes">
              <template v-if="route.children && route.name">
                <el-submenu :index="route.name">
                  <template slot="title">{{route.name}}</template>
                  <el-menu-item :index="cRoute.name" v-for="(cRoute ,index) in route.children" :route="cRoute" :key="index">{{cRoute.name}}</el-menu-item>
                </el-submenu>
              </template>
              <template v-if="!route.children && route.name">
                <el-menu-item :index="route.name" :route="route">{{route.name}}</el-menu-item>                 
              </template>              
            </template>           
          </el-menu>        
      </aside> 
       <!-- content start -->
        <div class="db-content-wrapper">
          <section class="db-content">
            <router-view></router-view>
          </section>
        </div>
        <!-- content end -->     
    </div>
 </section>
     
</template>

<script>
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
    headers
  }
}
</script>


<style lang="scss">
@import './styles/_variables.scss';
.db {
  .el-dropdown-menu {
    margin-top: 20px;
  }
  // header
  .db-header {
    width: 100%;
    height: 60px;
    background: #20A0FF;
    padding: 13px 20px;
    box-sizing: border-box;
    color: #ffffff;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;

    .logo{
      font-size: 2.4rem;
    }

    .user-info {
      float: right;

      img {
        width: 25px;
        height: 25px;
        vertical-align: -7px;
        margin: 0 0 0 10px;
        cursor: pointer;
      }
    }
  }

  // body
  .db-body {

    // menu
    .db-menu-wrapper {
      position: fixed;
      left: 0;
      top: 60px;
      background: red;
      height: 100%;
      overflow: auto;
      z-index: 98;

      .db-menu-bar {
        height: 100%;
        flex-grow: 0;
        width: 200px;
      }
    }

    // content
    .db-content-wrapper {
      width: 100%;
      z-index: 97;
      box-sizing: border-box;
      padding: 60px 0px 0px 200px;

      .db-content {
        padding: 25px;

        .db-content-inner {
          padding: 30px 0px;
        }
      }
    }
  }
}
</style>
