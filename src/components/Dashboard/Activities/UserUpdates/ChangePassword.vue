<template>
    <div v-if="activity.changes.before.password">
        <span class="text-gray-500 text-sm">{{ $t('password_update') }}</span>
    </div>
</template>

<script>
export default {
    name: 'Dashboard.Activities.UserUpdates.ChangePassword',
    props: ['activity'],
}
</script>