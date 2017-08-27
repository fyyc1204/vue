<template>
  <div id="charts">
    <ul>
       {{message}}
       <el-button type="primary">主要按钮</el-button>
    </ul>
  </div>

</template>
<script>
export default {
  name:'charts',
  data () {
    return {
      message: 'this pages from charts !'
    }
  }
}
</script>
<style>
</style>