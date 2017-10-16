<template>
    <header class="header" >
        <span class="logo">永锋集团内部网站</span>
        <div class="user-info">
            <el-dropdown trigger="click">
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
    </header>
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
    //padding: 13px 20px;
    padding-top: 13px;
    padding-left: 12px;
    box-sizing: border-box;
    color: #ffffff;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    .logo {        
        font-size: 1.2rem;
    }
    .user-info {
        float: right;
        width: 95px;
        height: 95px;        
        img {
            width: 38px;
            height: 38px;
            vertical-align: -7px;
            //margin: 0 0 0 10px;
            cursor: pointer;
        }
    }
}
</style>


