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
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},
                {name:"TS3310管理页面",url:"http://192.168.10.34/",img:"../../../static/baiduzhongban-4.gif"},

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