<template>
    <section>
        <!-- Paese -->
        <div v-if="activity.changes.before.country" class="flex justify-between space-x-8 py-2">
            <!-- Paese Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('country') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.country }}</p>
                </div>
            </div>

            <!-- Paese After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('country') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.country }}</p>
                </div>
            </div>
        </div> <!-- Fine Paese -->

        <!-- Città -->
        <div v-if="activity.changes.before.city" class="flex justify-between space-x-8 py-2">
            <!-- Città Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('city') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.city }}</p>
                </div>
            </div>

            <!-- Città After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('city') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.city }}</p>
                </div>
            </div>
        </div> <!-- Fine Città -->

        <!-- Provincia -->
        <div v-if="activity.changes.before.province" class="flex justify-between space-x-8 py-2">
            <!-- Provincia Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('province') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.province }}</p>
                </div>
            </div>

            <!-- Provincia After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('province') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.province }}</p>
                </div>
            </div>
        </div> <!-- Fine Provincia -->

        <!-- Indirizzo -->
        <div v-if="activity.changes.before.address" class="flex justify-between space-x-8 py-2">
            <!-- Indirizzo Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('address') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.address }}</p>
                </div>
            </div>

            <!-- Indirizzo After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('address') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.address }}</p>
                </div>
            </div>
        </div> <!-- Fine Indirizzo -->

        <!-- Codice Postale -->
        <div v-if="activity.changes.before.zipcode" class="flex justify-between space-x-8 py-2">
            <!-- Codice Postale Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('zipcode') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.zipcode }}</p>
                </div>
            </div>

            <!-- Codice Postale After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('zipcode') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.zipcode }}</p>
                </div>
            </div>
        </div> <!-- Fine Codice Postale -->

        <!-- Telefono -->
        <div v-if="activity.changes.before.phone" class="flex justify-between space-x-8 py-2">
            <!-- Telefono Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('phone') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.phone }}</p>
                </div>
            </div>

            <!-- Telefono After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('phone') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.phone }}</p>
                </div>
            </div>
        </div> <!-- Fine Telefono -->
        
    </section>
</template>

<script>
export default {
    name: 'Dashboard.Activities.UserUpdates.UpdatePersonalInfo',
    props: ['activity'],
}
</script>