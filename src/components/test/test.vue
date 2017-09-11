<template>
<div>
    <ul>
        <li> {{username}} </li>
        <li>密码 </li>
        <el-button @click="click">登陆</el-button>
         <el-button @click="click1">登陆1</el-button>
        <el-input :v-model="iscollapse"></el-input>
        <el-button v-on:click="cc">打开</el-button>
    </ul>
<el-menu theme="dark" class="el-menu-vertical-demo" :collapse="iscollapse" >
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">
  <span>选项1</span></el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>

</template>
<script> 

export default {
    name: 'test',
    data() {
        return {
            sid: '',
            username: '',
            iscollapse:false
        }
    },
    methods: {
        click() {
            this.username=this.$store.state.adminleftnavnum
        },
        click1(){
            this.$store.state.adminleftnavnum=!this.$store.state.adminleftnavnum
        },
        cc() {
            this.iscollapse=!this.iscollapse
        }
    }

}


</script>

<style> 
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 800px;
    min-width: 300px;
    min-height: 900px;
    
  }
</style>

