<template>
    <div class="flex justify-between space-x-10">
        <div class="flex space-x-8">
            <div class="w-2.5 h-2.5 ring-4 ring-pink-200 bg-pink-500 rounded-full flex-none mt-1.5"></div>

            <div>
                <span class="block text-sm text-gray-600">{{ $t('order_created') }} €{{ activity.subject.total }}</span>
                <span class="block text-xs text-gray-400">{{ $t('order_number')}}: {{ activity.subject.order_number }}</span>
            </div>
        </div>

        <span class="block text-gray-400 text-xs whitespace-nowrap">{{ $moment(activity.created_at).fromNow() }}</span>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Activities.order_created',
    props: ['activity']
}
</script>