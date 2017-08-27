<template>
    <header class="db-header">
        <div class="user-info">
            <span>注销</span>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu  slot="dropdown">
                    </el-dropdown-item>测试1</el-dropdown-item>
                    </el-dropdown-item>测试2</el-dropdown-item>
                    </el-dropdown-item>测试3</el-dropdown-item>
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
.db {
    .el-dropdown-menu {
        margin-top: 20px;
    } // header
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

        .logo {
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
}

.avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }
        .el-icon-caret-bottom {
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
        }
    }
}
</style>


