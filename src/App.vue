<template>
	<div style="font-family: 'Poppins', sans-serif;">
		<router-view class="bg-white min-h-screen"/>

		<NotificationList />
	</div>
</template>

<script>
import NotificationList from '@/components/Notifications/NotificationList'

export default {
	components: {
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
