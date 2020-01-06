import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
	{
		path: '/redirect',
		component: '',
		hidden: true,
		children: [
			{
				path: '/redirect/:path*',
				component: () => import('@/views/redirect/index')
			}
		]
	}
]

export const asyncRoutes = [
	{
	
	}
]


const createRouter = () => new Router({
	scrollBehavior: () => ({y: 0})
	
})
