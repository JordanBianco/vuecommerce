import it from '@/assets/lang/it.json'
import en from '@/assets/lang/en.json'

import store from '@/store'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: store.state.language.language || 'it',
    messages: {
        it: it,
        en: en
    }
})