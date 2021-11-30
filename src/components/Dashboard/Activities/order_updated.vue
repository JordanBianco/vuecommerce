<template>
    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-x-10 sm:space-y-0">
        <div class="flex space-x-4 xs:space-x-8">
            <div class="w-2.5 h-2.5 ring-4 ring-pink-200 bg-pink-500 rounded-full flex-none mt-1.5"></div>

            <div>
                <span class="block text-sm leading-tight text-gray-600 mb-1">{{ activity.changes.after.archived_at ? $t('order_archived') :  $t('order_restored') }}</span>
                <span class="block text-xs text-gray-400">{{ $t('order_number') }}: {{ activity.subject.order_number }}</span>
            </div>
        </div>

        <span class="block text-gray-400 text-xs whitespace-nowrap ml-6 xs:ml-11 sm:ml-0">{{ $moment(activity.created_at).fromNow() }}</span>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Activities.order_created',
    props: ['activity']
}
</script>