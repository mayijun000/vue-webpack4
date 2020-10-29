import Vue from "vue";
import App from "./App.vue";
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "@/assets/css/common.scss";
import Axios from '@/api'

Vue.use(Antd);
Vue.prototype.$Axios = Axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');