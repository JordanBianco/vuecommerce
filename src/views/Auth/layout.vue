<template>
    <div>
        <main class="w-full">            
            <transition name="fade">
                <router-view
                    class="p-6 bg-white min-h-screen"
                    :key="$route.path">
                </router-view>
            </transition>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Auth.layout',
}
</script>