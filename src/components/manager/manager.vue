<template> 
    <div>
    <!--<hamburger></hamburger>-->
        <el-row >
            <el-col :span="4" v-for="(url,index) in urls" :key=index>
                <a :href=url.url target="view_window">
                    <img :src=url.img>{{url.name}}</a>
            </el-col>            
        </el-row>
    </div>

</template>


<script>
import Hamburger from '../Hamburger';
export default {
    name: 'header',
    data() {
        return {
            urls: [
                {name:"正式机连接数",url:"http://192.168.10.2/erp/jsp/mgmt/JMXClient.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"正式机管理控制台",url:"http://192.168.10.12:9090/admin/secure/logon.do",img:"../../../static/baiduzhongban-4.gif"},
                {name:"正式机WAS线程监控",url:"http://192.168.10.2:9081/erp/jsp/mgmt/ThreadList.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"正式机运行jSP",url:"http://192.168.10.2:9081/erp/jsp/mgmt/Running.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"正式机登陆画面",url:"http://erp.yfgt.com/erp/ds/jsp/dsjjeip.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"测试机连接数",url:"http://192.168.10.5/erp/jsp/mgmt/JMXClient.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"测试机管理控制台",url:"http://192.168.10.5:9090/admin/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"负载均衡F5",url:"https://192.168.10.15/tmui/Control/jspmap/tmui/locallb/pool/stats.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"公司网站",url:"http://www.yfgt.cn/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"公司网站后台",url:"http://www.yfgt.cn/yfm/login.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"联通OA",url:"http://oa.yfgt.com:8080/oa/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"ERP监控页面",url:"http://erp.yfgt.com/erp/html/monitor.html",img:"../../../static/baiduzhongban-4.gif"},
                {name:"资金中心NC",url:"http://192.168.43.192:633/index.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"电商主页",url:"http://192.168.100.202/index.shtml",img:"../../../static/baiduzhongban-4.gif"},
                {name:"网管",url:"http://192.168.100.100:8080",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"EMS主页",url:"http://192.168.102.120/ems/login/index.jsp",img:"../../../static/baiduzhongban-4.gif"},
                {name:"华为虚拟机刀箱管理页面",url:"https://192.168.2.3/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"WI虚拟桌面登陆地址",url:"https://192.168.102.40/pages/login.do",img:"../../../static/baiduzhongban-4.gif"},
                {name:"FA--管理页面",url:"https://192.168.102.33:8448",img:"../../../static/baiduzhongban-4.gif"},
                {name:"FC--管理页面",url:"https://192.168.102.30",img:"../../../static/baiduzhongban-4.gif"},
                {name:"Rainbow--FC虚拟机迁移",url:"https://192.168.102.132:8443/hConvertor/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"rabbitMQ",url:"http://192.168.102.134:15672/",img:"../../../static/baiduzhongban-4.gif"},
                
            ]
        }

    },
    components: {
      Hamburger
    }
}

</script>
<style>

</style>