import Vue from 'vue'
import Router from 'vue-router'
import { BasicLayout } from './layouts'
import home from './views/home.vue'
import index from './views/index.vue'
import tools from '../devtools/App.vue'
import bookmarks from './views/sample.bookmarks/bookmarks.vue'
// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject)
		return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

export default new Router({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/bookmarks',
			component: BasicLayout,
			children: [
				{
					path: 'home',
					name: 'Home',
					component: home,
				},
				{
					path: 'index',
					name: 'index',
					component: index,
				},
				{
					path: 'tools',
					name: 'tools',
					component: tools,
				},
				{
					path: 'bookmarks',
					name: 'bookmarks',
					component: bookmarks
				},
			],
		},
	],
})
