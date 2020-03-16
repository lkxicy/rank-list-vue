import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rank from '../views/Rank.vue'
import ComCollect from '../views/ComCollect.vue'
import MicCollect from '../views/MicCollect.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Rank',
        name: 'Rank',
        component: Rank
    },
    {
        path: '/ComCollect',
        name: 'ComCollect',
        component: ComCollect
    },
    {
        path: '/MicCollect',
        name: 'MicCollect',
        component: MicCollect
    },


]

const router = new VueRouter({
    routes
})

export default router