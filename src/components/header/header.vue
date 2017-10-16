<template>
    <div class="header">
        <header>
            <div class="logo">
                <img src="../../../static/scarlet-159.png">
                <span>永锋集团内部网站</span>
            </div>

            <div class="user-info">
                <el-dropdown trigger="click" menu-align="start">
                    <span class="el-dropdown-link">
                        <img src="../../../static/scarlet-159.png">admin
                    </span>
                    <el-dropdown-menu  slot="dropdown">
                        <el-dropdown-item> <i class="el-icon-check"></i>个人信息</el-dropdown-item>
                        <el-dropdown-item> <i class="el-icon-warning"></i>我的信箱</el-dropdown-item>
                        <el-dropdown-item> <i class="el-icon-warning"></i>清空缓存</el-dropdown-item>
                        <el-dropdown-item> <i class="el-icon-warning"></i>皮肤设置</el-dropdown-item>
                        <el-dropdown-item disabled><i class="el-icon-warning"></i>禁用配置</el-dropdown-item>
                        <el-dropdown-item divided> <i class="el-icon-warning"></i>安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="badge">
                <el-badge :value="12" class="item">
                    <i class="el-icon-setting"></i>
                </el-badge>
            </div>
            <div class="badge"> 
                <el-badge :value="3" class="item">
                    <i class="el-icon-delete2"></i>
                </el-badge>
            </div>
            <div class="badge">
                <el-badge :value="123" class="item">
                    <i class="el-icon-message"></i>
                </el-badge>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'header',
    data() {
        return {
            msg: '测试'
        }

    }
}

</script>
<style lang="scss">
@import '../../styles/_variables.scss';
.header {
    width: 100%;
    height: 50px;
    background: #1abc9c;
    display:inline-block;
    box-sizing: border-box;
    color: #ffffff;
    z-index: 99;
    position: fixed;
    
    .logo {
        float:left;
        padding-left: 5px;
        padding-top: 5px;        
        font-size: 1.0rem;
        img {
            width: 40px;
            height: 40px;
            vertical-align: -15px;
        }
    }
    .badge {
        float: right;
        //padding-top: 0px;
        //padding-right: 0px;
        width: 50px;
        height: 50px;
        cursor: pointer;  
        //padding-left: 900px;
        .item{
            //padding-top: 10px;
            margin-left: 15px;
            vertical-align: -15px;
            margin-right: 30px;
        }
    }
    .badge:hover{
        background-color:  #046d58;
    }
    .user-info {
        float: right;
        padding-top: 5px;        
        width: 110px;
        height: 45px; 
        cursor: pointer;      
        img {
            width: 38px;
            height: 38px;
            vertical-align: -15px;
            margin: 0 0 0 10px;            
        }
    }
    .user-info:hover {
        background-color:  #046d58;
        //width: 110px;
        //height: 45px; 
    }
    
}
</style>


