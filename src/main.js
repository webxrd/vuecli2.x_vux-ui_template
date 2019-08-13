// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'// 自定义接口api挂载到Vue的原型上
import store from './store'
import vuxComponents from './my-vue-ui-components'// 自定义专门引入vux组件的文件
import FastClick from 'fastclick'
FastClick.attach(document.body);// 解决‘移动端点击事件延迟300ms的问题'

// 循环use组件
console.log(vuxComponents, '12');
for (let i in vuxComponents) {
    let name = i.replace(i[0], i[0].toLowerCase());// 组件名
    console.log(name);
    Vue.component(name, vuxComponents[i])
}


Vue.config.productionTip = false
Vue.config.$api = api

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
