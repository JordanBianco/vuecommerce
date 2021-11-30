import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
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
	// Home
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
		meta: { cart: true }
	},
	// Review
	{
		path: '/review/:slug',
		name: 'Review',
		component: () => import('../views/Review/show.vue'),
		props: true,
		meta: { auth: true }
	},
	// User Routes
	{
		path: '/dashboard',
		component: () => import('../views/Auth/User/dashboard.vue'),
		meta: { auth: true },
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: () => import('../views/Auth/User/Dashboard/Dashboard.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'orders',
				name: 'My Orders',
				component: () => import('../views/Auth/User/Dashboard/MyOrders.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'address',
				name: 'My Address',
				component: () => import('../views/Auth/User/Dashboard/MyAddress.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'reviews',
				name: 'My Reviews',
				component: () => import('../views/Auth/User/Dashboard/MyReviews.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'archived-orders',
				name: 'Archived Orders',
				component: () => import('../views/Auth/User/Dashboard/MyArchivedOrders.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'personal-info',
				name: 'Personal Info',
				component: () => import('../views/Auth/User/Dashboard/MyInfo.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'change-password',
				name: 'Change Password',
				component: () => import('../views/Auth/User/Dashboard/ChangePassword.vue'),
				meta: { dashboard: true },
			},
			{
				path: 'delete-account',
				name: 'Delete Account',
				component: () => import('../views/Auth/User/Dashboard/DeleteAccount.vue'),
				meta: { dashboard: true },
			}
		],	
	},
	// Admin Routes
	{
		path: '/admin/dashboard',
		component: () => import('../views/Auth/Admin/dashboard.vue'),
		meta: { auth: true },
		children: [
			// {
			// 	path: '/',
			// 	name: 'Admin Dashboard',
			// 	component: () => import('../views/Admin/Dashboard/Dashboard.vue'),
			// 	// meta: { dashboard: true },
			// },
		],	
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
	} else if (to.matched.some(record => record.meta.cart)) {
		if (store.state.cart.items.length < 1) {
			next({
				name: 'Dashboard'
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
