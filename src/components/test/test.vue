<template>
<div>
    <span icon="fa-window-restore"></span>
    

    <el-input icon="fa-hand-o-right fa-5x" />
    <i class="el-icon-fa-hand-o-right fa-2x"></i>
    <el-input icon="fa-address-book" style="width: 200px"></el-input>
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

</style>

