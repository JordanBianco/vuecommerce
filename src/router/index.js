import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
	},
	// Products
	{
		path: '/product/:id',
		name: 'product.show',
		component: () => import(/* webpackChunkName: "productShow" */ '../views/Product/show.vue'),
		props: true
	},
]

const router = new VueRouter({
	mode: 'hash',
	routes,
	base_path: 'vuecommerce'
})

export default router
