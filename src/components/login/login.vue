<template>
<div>
    <ul>
        <li> {{username}} </li>
        <li>密码 </li>
        <el-button @click="login">登陆</el-button>

    </ul>
</div>

</template>
<script> 
export default {
    name: 'login',
    data() {
        return {
            sid: '',
            username: ''
        }
    },
    methods: {
        click() {
            this.username="ss" ;
        }
    }

}


</script>

<style> 
</style>

