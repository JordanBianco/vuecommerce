<template>
	<div style="font-family: 'Poppins', sans-serif;">
		<TheNavbar class="hidden md:block" />
		<router-view class="bg-gray-50 min-h-screen pb-24 md:pb-16"/>
		<MobileNavbar class="md:hidden block" />
		<footer class="bg-c-blue py-44">
			&copy;
		</footer>
	</div>
</template>

<script>
import TheNavbar from '@/components/Layout/TheNavbar'
import MobileNavbar from '@/components/Layout/MobileNavbar'

export default {
	components: {
		TheNavbar,
		MobileNavbar
	},
	computed: {
		isOpen() {
			return this.$store.state.cart.isOpen
		}
	},
	watch: {
		isOpen() {
			if (this.isOpen) {
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
