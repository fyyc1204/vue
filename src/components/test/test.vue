<template>
<span>空行</span>
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

