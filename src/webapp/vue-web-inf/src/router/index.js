import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "@/layout/Index";
import HelloWorld from "@/components/HelloWorld/index";
import Login from "@/layout/Login";
import Change from  "@/components/Change/index";
import Query from "@/components/Query/index";
import Add from "@//components/Add/index";


export const constantRoutes = [
    {
      path:'/',
      component: Login
    },
    {
        // 首页
        path: '/index',
        name: 'index',
        component: Index,
        children: [
            {
                // 测试用路由，样例都在这
                path: 'test',
                component: HelloWorld
            },
            {
                path: 'search',
                component: Query,
            }, {
                path:'personnel',
                component:Change,
            },
            {
                path: 'add',
                component: Add,
            },{
                path: 'logout',
                component: HelloWorld
            }
        ]
    }
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
