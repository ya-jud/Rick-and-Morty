import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store/index';

new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    render: h => h(App)
});