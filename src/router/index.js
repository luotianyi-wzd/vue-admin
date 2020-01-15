import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('@/views/dashboard/index'),
				name: 'Dashboard',
				meta: {title: 'dashboard', icon: 'dashboard', affix: true}
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		meta: {
			title: 'login',
		},
		hidden: true
	},
	{
		path: '/404',
		component: () => import('@/views/error-page/404'),
		meta: {
			title: '404',
		},
		hidden: true
	},
	{
		path: '/goods',
		component: Layout,
		redirect: '/goods/page',
		alwaysShow: true, // will always show the root menu
		name: 'Goods',
		meta: {
			title: 'goods',
			icon: 'lock',
			roles: ['admin', 'editor'] // you can set roles in root nav
		},
		children: [
			{
				path: 'page',
				component: () => import('@/views/goods/page'),
				name: 'GoodsPage',
				meta: {
					title: 'pageGoods',
					roles: ['admin'] // or you can only set roles in sub nav
				}
			},
			{
				path: 'page1',
				component: () => import('@/views/goods/page'),
				name: 'GoodsPage',
				meta: {
					title: 'pageGoods',
					roles: ['admin'] // or you can only set roles in sub nav
				}
			}
		]
	}
]

export const asyncRoutes = [
	{
		path: '/permission',
		component: Layout,
		redirect: '/permission/page',
		alwaysShow: true, // will always show the root menu
		meta: {
			title: 'permission',
			icon: 'lock',
			roles: ['admin', 'editor'] // you can set roles in root nav
		},
		children: [
			{
				path: 'page',
				component: () => import('@/views/permission/page'),
				name: 'xxxx',
				meta: {
					title: 'pagePermission',
					roles: ['admin'] // or you can only set roles in sub nav
				}
			}
		]
	}
]

const createRouter = () => new Router({
	scrollBehavior: () => ({y: 0}),
	routes: constantRoutes
})

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

const router = createRouter()

export default router
