<template>
<el-menu class="navbar">
    <el-breadcrumb  class="el-breadcrumb" separator="/">
      <el-breadcrumb-item ><i class="el-icon-share"  @click="change"></i></el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
        <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.name}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
</el-menu>
</template>

<script>
import hamburger from '../Hamburger/index.vue';
export default {
	created() {
			this.getBreadcrumb()
	},
  data () {
    return {
        paths : [
					{name:"首页",path:"/"},
					{name:"导航",paht:"/navigate"},
					{name:"管理",path:"/manager"}
				],
        levelList: '',
        iscollapse:'true'
    }
  },
	methods: {
       getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0];
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }].concat(matched)
        }
        this.levelList = matched;
      },
      change() {
          this.$store.state.adminleftnavnum=!this.$store.state.adminleftnavnum
      }
	},
	watch:{
		$route() {
			this.getBreadcrumb();
		}
  },
  components: {
    hamburger
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  	.navbar {
			height: 50px;
			line-height: 50px;
			border-radius: 0px !important;
			.hamburger-container {
					line-height: 58px;
					height: 50px;
					float: left;
					padding: 0 10px;
			}
			.errLog-container {
					display: inline-block;
					position: absolute;
					right: 150px;
			}
			.screenfull {
					position: absolute;
					right: 90px;
					top: 16px;
					color: red;
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
    .el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left:  0px;
        margin-top:  0px;
        height: 50px;
        background: #eef1f6;
        columns: #000000;
        width: 100%;
        .no-redirect {
          color: #000000;
          cursor: text;
        }
      }
	}
</style>
