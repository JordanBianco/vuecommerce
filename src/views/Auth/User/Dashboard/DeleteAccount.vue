<template>
    <div>
        <header class="pb-6">
            <h2 class="text-xl text-gray-600">{{ $t('delete_account') }}</h2>
        </header>

        <div>
            <button
                @click="deleteAccount()"
                class="text-center text-xs border border-red-500 rounded-lg text-red-500 px-3 py-2 shadow-sm xs:max-w-max">
                    {{ $t('delete_account')}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User.Dashboard.DeleteAccount',
    methods: {
        deleteAccount() {
            if (confirm(this.$t('delete_account_confirm'))) {
                this.$store.dispatch('user/deleteAccount')
            }
        }
    }
}
</script>