<template>
  <div id="test1" class="log">
    <el-form :inline="true" class="search">
        <el-form-item label="日期："> 
            <el-date-picker v-model="selectdate"  @change="setEndDate" type="date"  placeholder="选择日期" ></el-date-picker>
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

    <el-table :data="results" height="480">
        <el-table-column prop="ReceivedAt" label="日期" width="200"></el-table-column>
        <el-table-column prop="FromHost" label="名称" width="135"></el-table-column>
        <el-table-column prop="Priority" label="级别" width="80"></el-table-column>
        <el-table-column prop="Facility" label="优先权" width="80"></el-table-column>
        <el-table-column prop="SysLogTag" label="来源" width="190"></el-table-column>
        <el-table-column prop="Message" label="内容" width="500"></el-table-column>
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
      selectdate: '',
      hosts: []
    }
  },
    methods: {
        query() {
            axios.get('http://192.168.100.10:3000/users/',{ params:{ ipaddress:this.ipaddress,date:this.selectdate}}).then(response=>{
                this.results = response.data;
            })
        },
        setEndDate(val){
            this.selectdate=val;
            //console.log(val); 
        }
    },
    mounted() {
        axios.get('http://192.168.100.10:3000/users/hosts').then(response=>{
                this.hosts = response.data;
            })
    }
}
</script>
<style rel="stylesheet/scss"  lang="scss">
.log {
    padding: 10px 10px 10px 10px;
    .search {
        height: 45px;
    }
}
</style>