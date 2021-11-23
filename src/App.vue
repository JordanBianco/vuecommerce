<template>
	<div style="font-family: 'Poppins', sans-serif;">
		<TheNavbar v-if="!isDashboard" />
		<router-view class="bg-white min-h-screen pb-24 md:pb-16"/>
		<TheFooter v-if="!isDashboard" />

		<NotificationList />
	</div>
</template>

<script>
import TheNavbar from '@/components/Layout/TheNavbar'
import TheFooter from '@/components/Layout/TheFooter'
import NotificationList from '@/components/Notifications/NotificationList'

export default {
	components: {
		TheNavbar,
		TheFooter,
		NotificationList
	},
	computed: {
		// Aggiungere al removeScroll i filtri e il sidemenu
		isOpen() {
			return this.$store.state.cart.isOpen
		},
		showFilters() {
			return this.$store.state.product.showFilters
		},
		isDashboard() {
			return this.$route.meta.dashboard
		}
	},
	watch: {
		isOpen() {
			if (this.isOpen) {
				document.querySelector('body').className = 'removeScroll'
			} else {
				document.querySelector('body').classList.remove('removeScroll')
			}
		},
		showFilters() {
			if (this.showFilters) {
				document.querySelector('body').className = 'removeScroll'
			} else {
				document.querySelector('body').classList.remove('removeScroll')
			}
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.removeScroll {
	overflow: hidden;
	height: 100%;
}
</style>
