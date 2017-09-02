import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import main_index from '@/components/page/main_index'
import add_class_one from '@/components/page/add_class_one'

Vue.use(Router)




export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/main',
        name: 'main',
        component: main,
        children: [{
            path: '/',
            name: 'main_index',
            component: main_index,
        }, {
            path: 'add_class_one',
            name: 'add_class_one',
            component: add_class_one,
        }]
    }]
})