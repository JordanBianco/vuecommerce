import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	// Products
	{
		path: '/product/:slug',
		name: 'product.show',
		component: () => import('../views/Product/show.vue'),
		props: true
	},
	// Category
	{
		path: '/category/:slug',
		name: 'category.show',
		component: () => import('../views/Category/show.vue'),
		props: true
	},
	// Cart
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/Cart/show.vue'),
	},
	// Cart / Saved
	{
		path: '/saved',
		name: 'Saved',
		component: () => import('../views/Saved/show.vue'),
	},
	// Checkout
	{
		path: '/checkout',
		name: 'Checkout',
		component: () => import('../views/Checkout/show.vue'),
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


router.beforeEach((to, from, next) => {
	if (to.params.slug) {
		document.title = process.env.VUE_APP_TITLE + ' | ' + to.params.slug
	} else {
		document.title = process.env.VUE_APP_TITLE + ' | ' + to.name
	}
	next()
})

export default router
