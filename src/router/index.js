import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
    {
        path:'*',
        component:()=>import('../views/ErrorPages/Error404.vue')
    },
    {
        path:'/',
        component:()=> import('../components/Inicio.vue'),
    },
    {
        path:'/Inicio',
        component:()=> import('../components/Inicio.vue'),
    },
    {
        path:'/Paginacion',
        component:()=> import('../components/Paginacion.vue'),
    },
    {
        path:'/Formulario',
        component:()=> import('../components/Formulario.vue'),
    }
]
const router = new VueRouter({ routes, })
export default router;