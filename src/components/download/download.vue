<template>    
    <el-menu>    
        <hamburger></hamburger>
    </el-menu>    
</template>
<script>
import Hamburger from '../Hamburger';
export default {
    name: 'header',
    data() {
        return {
            msg: '测试'
        }

    },
    components: {
      Hamburger
    }
}

</script>
<style>

</style>


