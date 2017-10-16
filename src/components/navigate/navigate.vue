<template>
  <div id="navigate" class="nagigate" > 
    <el-form :inline="true" class='search'>
        <el-form-item>
          <el-input v-model="key" class='input'   placeholder="搜索关键字"  ></el-input>
        </el-form-item>
          <el-button type="primary" v-on:click="test" >搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-input v-model="columnset" class='input'  placeholder="col count"> </el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" v-on:click="setting">设置</el-button>
        </el-form-item>
        <el-form-item>
          <el-input v-model="name"  class='input' placeholder="ERP"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="url"  class='input-large' placeholder="http://erp.yfgt.com" > </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="src"  class='input-large' placeholder="../../../static/11.png"> </el-input>
        </el-form-item>
        <el-form-item>
           <el-button  type="primary" v-on:click="update">提交</el-button>
        </el-form-item>
    </el-form> 
    
    <el-row v-for="(url11,index) in results" v-bind:key="index">
      <el-col :span="6" class="grid-content bg-purple"  v-for="(con11,index) in url11" v-bind:key="index" >
        <el-card >
          <a :href="con11.url" target="view_window">
            <img :src="con11.src" ></img>
          </a>
          <div>
            <span>{{con11.name}}</span>       
          </div>
        </el-card>       
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'navigate',
  data () {
    return {
      urls: [
        [
        {name:"erp",src:"../../../static/11.png",url:"http://erp.yfgt.com"},
        {name:"oa移动办公",src:"../../../static/11.png",url:"http://oa.laigang.net"},
        {name:"视频会议",src:"../../../static/11.png",url:"http://192.168.100.125:8080"},
        {name:"erp",src:"../../../static/11.png",url:"http://erp.yfgt.com"}
        ],[
        {name:"erp",src:"../../../static/11.png",url:"http://erp.yfgt.com"},
        {name:"erp",src:"../../../static/11.png",url:"http://erp.yfgt.com"},
        {name:"erp",src:"../../../static/11.png",url:"http://erp.yfgt.com"},
        {name:"测试",src:"../../../static/11.png",url:"http://erp.yfgt.com"}
        ]
      ],
      results:[],
      columnset: '',
      key: '',
      name: '',
      url: '',
      src: ''
    }
  },
  methods: {
    test() {
      axios.get('http://192.168.100.10:3000/navigate/key' ,{params : { key : this.key}}).then(response=>{
                this.results = response.data;
         })
    },
    setting() {
      axios.get('http://192.168.100.10:3000/navigate/columnset/' ,{params : { columnset : this.columnset}}).then(response=>{
         this.results = response.data; 
         })
    },
    update() {
      axios.get("http://192.168.100.10:3000/navigate/update",{params:{name:this.name,url:this.url,src:this.src}}).then(response=>{
        alert(response.data);
       })
    }
  },
  mounted() {
    axios.get('http://192.168.100.10:3000/navigate/').then(response=>{
                this.results = response.data;
    })
  }
}
</script>
<style lang="scss">

.nagigate {
  padding-top: 10px;
  //padding-left: 10px;
  .search {
    height: 45px;
  }
  .input {
    width: 100px;
  }
  .input-large {
    width: 180px;
  }
}

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>