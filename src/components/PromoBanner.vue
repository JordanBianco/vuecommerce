<template>
    <div>
        <div v-if="isAuth && isFirstPurchase" class="bg-gradient-to-r from-c-green to-c-blue py-6 text-white text-center">
			<div class="w-11/12 mx-auto">
				<div>
					{{ $t('banner_promo_log') }}
					<span class="font-semibold">{{ $t('purchase_now') }}</span>
				</div>
			</div>
		</div>
		<div v-if="!isAuth" class="bg-gradient-to-r from-c-green to-c-blue py-6 text-white text-center">
			<div class="w-11/12 mx-auto">
				<div class="font-semibold">
					{{ $t('banner_promo_not_log') }}
					<router-link :to="{ name: 'Login'}" class="underline">{{ $t('banner_login') }}</router-link>
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