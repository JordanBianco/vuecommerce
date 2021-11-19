<template>
    <div>
        <section class="relative hidden xs:block">
            <div
                @click="openMenu"
                class="flex items-center space-x-1 text-gray-700 cursor-pointer">
                    <!-- Lang: italiano -->
                    <svg
                        v-if="language == 'it'"
                        class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" id="flag-icons-it" viewBox="0 0 640 480"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></g>
                    </svg>

                    <!-- Lang: inglese -->
                    <svg
                        v-if="language == 'en'"
                        class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/><path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/><path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                    </svg>
                    
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>
            </div>

            <div
                v-if="showLanguages"
                class="absolute top-6 right-0 shadow bg-white rounded-lg px-4 py-2">
                    <!-- Seleziona lingua inglese -->
                    <div
                        v-if="language == 'it'"
                        @click="selectLanguage('en')"
                        class="flex items-center space-x-2">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480">
                                <path fill="#012169" d="M0 0h640v480H0z"/>
                                <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                                <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                                <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                                <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                            </svg>
                            <span>EN</span>
                    </div>
                    <!-- Seleziona lingua italiano -->
                    <div
                        v-if="language == 'en'"
                        @click="selectLanguage('it')"
                        class="flex items-center space-x-2">
                            <svg  class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" id="flag-icons-it" viewBox="0 0 640 480">
                                <g fill-rule="evenodd" stroke-width="1pt">
                                    <path fill="#fff" d="M0 0h640v480H0z"/>
                                    <path fill="#009246" d="M0 0h213.3v480H0z"/>
                                    <path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/>
                                </g>
                            </svg>
                            <span>IT</span>
                    </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Layout.LanguageSwitcher',
    data() {
        return {
            showLanguages: false,
        }
    },
    computed: {
        language() {
            return this.$store.state.language.language
        }
    },
    methods: {
        selectLanguage(value) {
            this.$store.dispatch('language/setLanguage', value)
            window.location.reload();
            this.showLanguages = false
        },
        openMenu() {
            this.showLanguages = ! this.showLanguages
        }
    }
}
</script>