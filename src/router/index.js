import Vue from 'vue'
import Router from 'vue-router'
import FormSubmitApp from '../components/FormSubmit/FormSubmitApp.vue';

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/FormSubmitApp'
        },
        {
            path: '/login',
            name: 'LogIn',
            component: () => import('../components/Login/LogIn.vue')
        },
        {
            path: '/backgroundmanage',
            name: 'BackgroundManageApp',
            component: () => import('../components/BackgroundManage/BackgroundManageApp.vue')
        },
        {
            path: '/FormSubmitApp',
            name: 'FormSubmitApp',
            component: FormSubmitApp
        }

    ]
})

//路由守卫

// router.beforeEach((to, from, next) => {
//     if (to.fullPath === "/backgroundmanage") {
//         document.title = to.meta.title || '';
//         // 里面包含了用户权限，用户各种信息等
//         const user = JSON.parse(sessionStorage.getItem('log_token'));
//         // 这里必须加上to.path !== 'login'的判断，不然会陷入无限循环，
//         // 因为逻辑是第一次进来，判断用户信息不存在，即!user为true，由于使用的是next('/login')而非next()，
//         // 会再次进入路由跳转，next()方法没有参数是直接进入页面，不会再次进入路由拦截，有参数则会，因为跳转，
//         // 所以再次进入路由，再次判断，再次进入路由，再次判断，循环往复无限循环
//         // 所以一定要加to.path !== 'login'的判断
//         if (!user && to.path !== '/backgroundmanage') {
//             next('/backgroundmanage');
//         } else if (to.meta.permission) {
//             user.permission === to.meta.permission ? next() : message.alert('没有权限');
//         } else {
//             next();
//         }
//     }else {
//         next()
//     }
// });

export default router
