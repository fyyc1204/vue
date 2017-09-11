<template>
  <div id="test1">
    <el-form :inline="true">
        <el-form-item label="日期："> 
            <el-date-picker v-model="value1"  placeholder="选择日期" ></el-date-picker>
        </el-form-item>
        <el-form-item label="主机：">
            <template>
                <el-select v-model="ipaddress" placeholder="请选择">
                    <el-option
                    v-for="item in hosts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.FromHost">
                    </el-option>
                </el-select>
            </template>
        </el-form-item>
        <el-form-item>
             <el-button @click="query" type="primary">查询日志</el-button>
        </el-form-item>

    </el-form>

    <el-table :data="results">
        <el-table-column prop="id" label="编号" width="200"></el-table-column>
        <el-table-column prop="name" label="名称" width="135"></el-table-column>
    </el-table>
  </div>

</template>
<script>
import axios from 'axios'
export default {
    name:'test1',
    data () {
    return {
      message: 'this page from log',
      ipaddress: '',
      results: [],
      value1: '',
      hosts: []
    }
  },
    methods: {
        query() {
            axios.get('http://192.168.100.10:3000/users/',{ params:{ ipaddress:this.ipaddress,date:this.value1}}).then(response=>{
                this.results = response.data;
            })
        }
    },
    mounted() {
        axios.get('http://192.168.100.10:3000/inventory').then(response=>{
                this.results = response.data;
            })
    }
}
</script>
<style>


</style>