import Vue from 'vue'
import Router from 'vue-router'
import Home from '../paginas/Home.vue'
import Catalogo from '../paginas/Catalogo.vue'

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/Catalogo",
        component: Catalogo
    }
];
export default routes;
