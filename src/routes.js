import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './store/auth.js'
import StaticUser from './StaticUser.vue'
import Account from './Account.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
	{path: '/', component: require('./views/Index.vue'), beforeEnter: requireAuth },
	{path: '/login', component: require('./views/auth/Login.vue'), beforeEnter: requireVisitors },
	{path: '/register', component: require('./views/auth/Register.vue'), beforeEnter: requireVisitors },
    {
        path: '/:username',
        component: StaticUser,
        beforeEnter: requireAuth,
        children: [
         {path: '/' , component: require('./views/profile/Posts.vue') },
         {path: 'followers', component: require('./views/profile/Followers.vue')},
         {path: 'following', component: require('./views/profile/Following.vue')}
        ]
    },
    {
        path: '/user/account/', 
        component: Account,
        beforeEnter: requireAuth,
        children: [
            {path: '/', component: require('./views/user/EditProfile.vue')},
            {path: 'avatar_cover', component: require('./views/user/AvatarCover.vue')},
            {path: 'password', component: require('./views/user/Password.vue')}
        ]
    }
    
	]
})
export default router
function requireAuth (to, from, next) {
    if (Auth.isAuthenticated()) {
        return next()
    } else {
        return next('/login')
    } 
}
function requireVisitors (to, from, next) {
    if (! Auth.isAuthenticated()) {
        return next()
    } else {
        return next('/')
    } 
}