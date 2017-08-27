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

//import routes from './routes';

//Vue.use(Router)

//export default new Router({})
let  routes= [
    {
      path: '/navigate',
      name: '导航',
      component: navigate
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
        {
        path: 'header',
        name: '头部',
        component: header
        },
        {
          path: 'header',
          name: '测试2',
          component: header
        },
        {
          path: 'header',
          name: '测试',
          component: header
        }
      ]
    },
    {
      path: '/log',
      name: '日志',
      component: log
    },
    {
      path: '/charts',
      name: '图表',
      component: charts
    },
    {
      path: '/download',
      name: '下载',
      component: download
    }
  ]

export default routes;