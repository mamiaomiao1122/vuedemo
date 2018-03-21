// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// var myheaderchildren = {
// 	template:'<p>i am a children header</p>'
// }

// var myheader = {
// 	template:'<div><my-header-children></my-header-children>this is my header</div>',
// 	  components:{
//   	  'my-header-children':myheaderchildren
//   }
// }

// var app = new Vue({
//   el: '#app',
//   // components: { App },
//   // template: '<div>hello {{ world }}</div>',
//   data:{
//   	world: 'world cccccc'
//   },
//   components:{
//   	// 'my-header':myheader
//   }
// })

// var app2 = new Vue({
//   el: '#app-2',
//   // components: { App },
//   // template: '<div>hello {{ world }}</div>',
//   data:{
//   	message: '页面加载于 '+new Date().toLocalString()
//   },
// })

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: '学习 JavaScript' },
//       { text: '学习 Vue' },
//       { text: '整个牛项目' }
//     ]
//   }
// })