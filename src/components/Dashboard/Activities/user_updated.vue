<template>
    <div v-if="!activity.changes.before.remember_token" class="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-x-10 sm:space-y-0">      
        <div class="flex space-x-4 xs:space-x-8 w-full">
            <div class="w-2.5 h-2.5 ring-4 ring-indigo-200 bg-indigo-500 rounded-full flex-none mt-2"></div>

            <div class="w-full">
                <span class="text-sm block text-gray-600 -mb-1">{{ $t('user_updated') }}</span>
                <span
                    @click="toggleShowChanges"
                    class="text-xs text-gray-400 cursor-pointer">
                        {{ showChanges ? $t('hide_changes') : $t('show_changes') }}
                </span>
            
                <transition name="fade">
                    <section v-if="showChanges" class="mt-2 bg-gray-50 p-4 rounded-lg">
                       <ChangePassword :activity="activity" />
                       <UpdatePersonalInfo :activity="activity" />
                       <UpdateAddress :activity="activity" />
                    </section>
                </transition>
            </div>
        </div>

        <span class="block text-gray-400 text-xs whitespace-nowrap ml-6 xs:ml-11 sm:ml-0">{{ $moment(activity.created_at).fromNow() }}</span>
    </div>
</template>

<script>
import ChangePassword from '@/components/Dashboard/Activities/UserUpdates/ChangePassword'
import UpdatePersonalInfo from '@/components/Dashboard/Activities/UserUpdates/UpdatePersonalInfo'
import UpdateAddress from '@/components/Dashboard/Activities/UserUpdates/UpdateAddress'

export default {
    name: 'Dashboard.Activities.user_updated',
    props: ['activity'],
    components: {
        ChangePassword,
        UpdatePersonalInfo,
        UpdateAddress
    },
    data() {
        return {
            showChanges: false
        }
    },
    methods: {
        toggleShowChanges() {
            this.showChanges = ! this.showChanges
        }
    }
}
</script>