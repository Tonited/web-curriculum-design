import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HelloWorld from "../components/HelloWorld/index";


export const constantRoutes = [
    {
        path: '/',
        component: HelloWorld
    },
]

const createRouter = () => new VueRouter({
    // mode: 'history', // require service support
    // 滚动行为 切换路由到顶部
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router;
