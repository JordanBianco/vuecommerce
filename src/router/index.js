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
	// Cart
	{
		path: '/cart',
		name: 'cart.show',
		component: () => import(/* webpackChunkName: "cartShow" */ '../views/Cart/show.vue'),
		props: true
	},
	// Cart / Saved
	{
		path: '/saved',
		name: 'saved.show',
		component: () => import(/* webpackChunkName: "savedShow" */ '../views/Saved/show.vue'),
		props: true
	},
]

const router = new VueRouter({
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition;
		} else if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
	mode: 'hash',
	routes,
	base_path: 'vuecommerce'
})

export default router
