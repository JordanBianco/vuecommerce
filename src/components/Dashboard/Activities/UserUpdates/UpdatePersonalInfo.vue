<template>
    <section>
        <!-- Nome -->
        <div v-if="activity.changes.before.first_name" class="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-8 md:space-y-0 py-2">
            <!-- Nome Before -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('first_name') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.first_name }}</p>
                </div>
            </div>

            <!-- Nome After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('first_name') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.first_name }}</p>
                </div>
            </div>
        </div> <!-- Fine Nome -->

        <!-- Cognome -->
        <div v-if="activity.changes.before.last_name" class="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-8 md:space-y-0 py-2">
            <!-- Cognome Before -->
            <div class="flex flex-col md:w-1/2">
                <span class="text-xs text-gray-400">{{ $t('last_name') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.last_name }}</p>
                </div>
            </div>

            <!-- Cognome After -->
            <div class="flex flex-col md:w-1/2">
                <span class="text-xs text-gray-400">{{ $t('last_name') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.last_name }}</p>
                </div>
            </div>
        </div> <!-- Fine Cognome -->

        <!-- Email -->
        <div v-if="activity.changes.before.email" class="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-8 md:space-y-0 py-2">
            <!-- Email Before -->
            <div class="flex flex-col md:w-1/2">
                <span class="text-xs text-gray-400">{{ $t('email') }}</span>
                <div class="flex space-x-2">
                    <span class="text-red-400 block text-lg">-</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.before.email }}</p>
                </div>
            </div>

            <!-- Email After -->
            <div class="flex flex-col w-1/2">
                <span class="text-xs text-gray-400">{{ $t('email') }}</span>
                <div class="flex items-start space-x-2">
                    <span class="text-c-green block text-lg">+</span>
                    <p class="text-gray-500 leading-tight text-sm mt-1.5">{{ activity.changes.after.email }}</p>
                </div>
            </div>
        </div> <!-- Fine Email -->
    </section>
</template>

<script>
export default {
    name: 'Dashboard.Activities.UserUpdates.UpdatePersonalInfo',
    props: ['activity'],
}
</script>