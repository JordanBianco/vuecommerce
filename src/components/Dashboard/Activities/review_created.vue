<template>
    <div v-if="activity.subject" class="flex justify-between space-x-10">
        <div class="flex space-x-8">
            <div class="w-2.5 h-2.5 ring-4 ring-blue-200 bg-blue-500 rounded-full flex-none mt-1.5"></div>

            <div>
                <span class="block text-sm text-gray-600">{{ $t('review_left') }}
                    <router-link class="hover:underline" :to="{ name: 'product.show', params: { slug: activity.subject.product.slug} }">"{{ activity.subject.product.name }}"</router-link>
                </span>
            </div>
        </div>

        <span class="block text-gray-400 text-xs whitespace-nowrap">{{ $moment(activity.created_at).fromNow() }}</span>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Activities.review_created',
    props: ['activity'],
}
</script>