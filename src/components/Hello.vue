<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <h2>使用routes的方法</h2>
    <h2 v-for="(route,index) in $router.options.routes" :key="index"  >{{route.children}}</h2>
    <h2>通过GET方法从服务器后台获取数据库数据</h2>


    <h2 v-for="(result,index) in results" :key=index  >  用户名： {{result}}</h2>
    <h2>通过POST方法从服务器后台获取数据</h2>
    <div>{{message}}</div>
      <div>
        <el-button v-on:click="postClick">点击按钮</el-button>
      </div>
    <ul>

      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import routes from "../router/index.js"
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App111',
      results: [],
      message: 'post test',
      ip: '',
      date: ''
    }
  },
  methods: {
    postClick(){
      axios.post('http://192.168.100.10:3000/users/posts/',{f:'aaa',l:'aa'}).then(response=>{
      this.message = response.data;
    })
    },
    getclick(){
      axios.get('http://192.168.100.10:3000/users/',{ip:ip,date:date}).then(response=>{
      this.results = response.data;
    })    
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
