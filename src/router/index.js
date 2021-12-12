import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
	// AUTH ROUTES
	{
		path: '/auth',
		component: () => import('../views/Auth/layout.vue'),
		meta: { guest: true },
		children: [
			{
				path: '/auth/login',
				name: 'Login',
				component: () => import('../views/Auth/login.vue'),
				meta: { guest: true }
			},
			{
				path: '/auth/register',
				name: 'Register',
				component: () => import('../views/Auth/register.vue'),
				meta: { guest: true }
			},
		]
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
		component: () => import('../views/Auth/User/layout.vue'),
		meta: { dashboard: true, auth: true },
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
		component: () => import('../views/Auth/Admin/layout.vue'),
		meta: { admin: true, auth: true },
		children: [
			{
				path: '/',
				name: 'Admin Dashboard',
				component: () => import('../views/Auth/Admin/Dashboard/Dashboard.vue'),
				meta: { admin: true, auth: true },
			},
			// Users
			{
				path: '/admin/users',
				name: 'Manage Users',
				component: () => import('../views/Auth/Admin/Dashboard/Users/index.vue'),
				meta: { admin: true, auth: true },
			},
			{
				path: '/admin/users/:id',
				name: 'user.show',
				component: () => import('../views/Auth/Admin/Dashboard/Users/show.vue'),
				props: true,
				meta: { admin: true, auth: true },
			},
			{
				path: '/admin/users/:id/edit',
				name: 'user.edit',
				component: () => import('../views/Auth/Admin/Dashboard/Users/edit.vue'),
				props: true,
				meta: { admin: true, auth: true },
			},
			// Coupons
			{
				path: '/admin/coupons',
				name: 'Manage Coupons',
				component: () => import('../views/Auth/Admin/Dashboard/Coupon/index.vue'),
				meta: { admin: true, auth: true },
			},
			{
				path: '/admin/coupons/:slug/edit',
				name: 'coupon.edit',
				component: () => import('../views/Auth/Admin/Dashboard/Coupon/edit.vue'),
				props: true,
				meta: { admin: true, auth: true },
			},
			// Calendar
			{
				path: '/admin/calendar',
				name: 'Calendar',
				component: () => import('../views/Auth/Admin/Dashboard/Calendar/index.vue'),
				meta: { admin: true, auth: true },
			},
			{
				path: '/admin/calendar/manage-category',
				name: 'Manage EventCategory',
				component: () => import('../views/Auth/Admin/Dashboard/Calendar/manageCategory.vue'),
				meta: { admin: true, auth: true },
			},
			{
				path: '/admin/calendar/category/:slug/edit',
				name: 'eventCategory.edit',
				component: () => import('../views/Auth/Admin/Dashboard/Calendar/edit.vue'),
				props: true,
				meta: { admin: true, auth: true },
			},
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
	} else if (to.params.id) {
		document.title =  'User ' + to.params.id + ' | ' + process.env.VUE_APP_TITLE
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
		} else if (to.matched.some(record => record.meta.admin)) {
			if (!store.state.auth.isAdmin) {
				next({
					name: 'Dashboard'
				});
			} else {
				next();
			}
		} else if (to.matched.some(record => record.meta.dashboard)) {
			if (!store.state.auth.isAdmin) {
				next()
			} else {
				next({
					name: 'Admin Dashboard'
				});
			}
		} else if (to.matched.some(record => record.meta.cart)) {
			if (store.state.cart.items.length < 1) {
				next({
					name: 'Home'
				});
			} else {
				next();
			}
		} else {
			next()
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
