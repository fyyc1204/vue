import Vue from 'vue'
//import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test/test'
import login from '@/components/login/login'
import header from '@/components/header/header'
import log from '@/components/log/log'
import charts from '@/components/charts/charts'
import navigate from '@/components/navigate/navigate'
import download from '@/components/download/download'
import manager from '@/components/manager/manager'
import inventory from '@/components/inventory/inventory'
import iphelper from '@/components/iphelper/iphelper'


//import Layout from '../views/layout/Layout';

//import routes from './routes';

//Vue.use(Router)

//export default new Router({})
let  routes= [
    {
      path: '/navigate',
      name: '导航',
      icon: 'el-icon-menu',
      component: navigate
    },
    {
      path: '/log',
      name: '日志',
      //redirect: '/log',
      icon: 'el-icon-edit',
      component: log
    },
    {
      path: '/charts',
      name: '图表',
      //redirect: '/charts',
      icon: 'el-icon-edit',
      component: charts
    },
    {
      path: '/download',
      name: '下载',
      //redirect: '/download',
      icon: 'el-icon-edit',
      component: download
    },
    {
      path: '/manager',
      name: '管理',
      //redirect: '/manager',
      icon: 'el-icon-edit',
      component: manager
    },
    {
      path: '/iphelper',
      name: 'IP地址管理',
      //redirect: '/test',
      icon: 'el-icon-document',
      component: iphelper
    },
    {
      path: '/hello',
      name: 'hello',
      //redirect: '/hello',
      icon: 'el-icon-edit',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      //redirect: '/test',
      icon: 'el-icon-fa-hand-o-right',
      component: test
    },
    {
      path: '/inventory',
      name: '资产管理',
      //redirect: '/test',
      icon: 'el-icon-fa-diamond',
      component:inventory,
      children:[
        {
        path: '/inventory',
        name: '服务器档案管理',
        //redirect: '/test',
        icon: 'el-icon-edit',
        component: inventory
        },
        {
          path: '/test',
          name: 'ip地址管理',
          //redirect: '/test',
          icon: 'el-icon-document',
          component: test
        },
        {
          path: '/test',
          name: '密码管理',
          //redirect: '/test',
          icon: 'el-icon-document',
          component: test
        }
      ]

    },
  ]

export default routes;