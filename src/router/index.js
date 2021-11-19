import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	// Login
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Auth/login.vue'),
		meta: { guest: true } 
	},
	// Register
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Auth/register.vue'),
		meta: { guest: true }
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
		meta: { auth: true }
	},
	// Saved
	{
		path: '/saved',
		name: 'Saved',
		component: () => import('../views/Saved/show.vue'),
		meta: { auth: true }
	},
	// Checkout
	{
		path: '/checkout',
		name: 'Checkout',
		component: () => import('../views/Checkout/show.vue'),
		meta: { auth: true }
	},
	// Dashboard
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/Auth/dashboard.vue'),
		meta: { auth: true }
	},
	// Review
	{
		path: '/review/:slug',
		name: 'Review',
		component: () => import('../views/Review/show.vue'),
		props: true,
		meta: { auth: true }
	},
	// Order
	{
		path: '/order/:slug',
		name: 'order.show',
		component: () => import('../views/Order/show.vue'),
		props: true,
		meta: { auth: true }
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


// Titolo della pagina
router.beforeEach((to, from, next) => {
	if (to.params.slug) {
		document.title =  to.params.slug + ' | ' + process.env.VUE_APP_TITLE
	} else {
		document.title =  to.name + ' | ' + process.env.VUE_APP_TITLE
	}
	next()
})

// Autorizzazioni
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.auth)) {
		if (!store.state.auth.auth) {
			next({
				name: 'Login'
			});
		} else {
			next();
		}
	} else if (to.matched.some(record => record.meta.guest)) {
		if (store.state.auth.auth) {
			next({
				name: 'Dashboard'
			});
		} else {
			next();
		}
	} else {
		next();
	}
})

export default router
