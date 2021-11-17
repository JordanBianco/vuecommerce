<template>
    <div
        class="fixed z-50 bottom-0 right-0 left-0">
            <notification-message
                v-for="(notification, index) in notifications" :key="index"
                :notification="notification"
                :index="index"/>
    </div> 
</template>

<script>
import notificationMessage from '@/components/Notifications/NotificationMessage'

export default {
    components: {
        notificationMessage
    },
    computed: {
        notifications() {
            return this.$store.state.notification.notifications;
        }
    }
}
</script>
