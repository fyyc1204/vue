<template>
  <div id="test1">
    <el-form :inline="true">
        <el-form-item label="栏位："> 
            <template>
                <el-select v-model="ipaddress" placeholder="栏位">
                    <el-option
                    v-for="item in hosts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.FromHost">
                    </el-option>
                </el-select>
            </template>
        </el-form-item>
        <el-form-item label="栏位："> 
            <template>
                <el-select v-model="operate" placeholder="栏位">
                    <el-option
                        key="1"
                        label="似"
                        value="like">
                    </el-option>
                    <el-option
                        key="2"
                        label="正确的"
                        value="=">
                    </el-option>
                </el-select>
            </template>
        </el-form-item>
        <el-form-item label="主机：">
            <template>
                <el-input v-model="data"></el-input>
            </template>
        </el-form-item>
        <el-form-item>
             <el-button @click="query" type="primary">查询日志</el-button>
        </el-form-item>

    </el-form>

    <el-table :data="results" height="510" show-summary :row-class-name="tableRowClassName" >
        <!--<el-table-column prop="id"   label="编号" width="200"></el-table-column>-->
        <el-table-column prop="name"  fixed="left" label="名称" width="135"></el-table-column>
        <el-table-column prop="SXdate" sortable label="上线日期" width="135"></el-table-column>
        <el-table-column prop="model" label="型号" width="135"></el-table-column>
        <el-table-column prop="cpu" label="CPU" width="135"></el-table-column>
        <el-table-column prop="memory" label="内存" width="135"></el-table-column>
        <el-table-column prop="disk" label="硬盘" width="135"></el-table-column>
        <el-table-column prop="power" label="电源" width="135"></el-table-column>
        <el-table-column prop="sn" label="序列号" width="135"></el-table-column>
        <el-table-column prop="pn" label="M/T" width="135"></el-table-column>
        <el-table-column prop="vendor" label="厂家" width="135"></el-table-column>
        <el-table-column prop="position" label="位置" width="135"></el-table-column>
        <el-table-column prop="os" label="系统" width="135"></el-table-column>
        <el-table-column prop="type" label="类型" width="135"></el-table-column>
        <el-table-column prop="bits" label="位数" width="135"></el-table-column>
        <el-table-column prop="software" label="软件" width="135"></el-table-column>
        <el-table-column prop="ENDdate" label="过保日期" width="135"></el-table-column>
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
      hosts: [],
      data: '',
      operate:''
    }
  },
    methods: {
        query() {
            axios.get('http://192.168.100.10:3000/users/',{ params:{ ipaddress:this.ipaddress,date:this.value1}}).then(response=>{
                this.results = response.data;
            })
        },
        tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
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
.el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>