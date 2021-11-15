<template>
    <div>
        <div v-if="isAuth && isFirstPurchase" class="bg-gradient-to-r from-c-green to-c-blue py-6 text-white text-center">
			<div class="w-11/12 mx-auto">
				<div>
					<span class="font-bold">20% di sconto</span> sul tuo primo acquisto con il codice <span class="font-bold">FIRST-20. </span>
					<router-link v-if="!isAuth" :to="{ name: 'Login'}" class="underline">Accedi subito!</router-link>
					<span>Acquista Ora!</span>
				</div>
			</div>
		</div>
		<div v-if="!isAuth" class="bg-gradient-to-r from-c-green to-c-blue py-6 text-white text-center">
			<div class="w-11/12 mx-auto">
				<div>
					<span class="font-bold">20% di sconto</span> sul tuo primo acquisto.
					<router-link :to="{ name: 'Login'}" class="underline">Accedi subito!</router-link>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    name: 'PromoBanner',
    computed: {
        isAuth() {
			return this.$store.state.auth.auth
		},
		isFirstPurchase() {
			return this.$store.state.user.user.orders_count == 0
		}
    }
}
</script>