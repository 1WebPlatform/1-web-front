import {defineStore} from 'pinia'

export const useScreenStore = defineStore('screen', {
    state: () => {
        return {screen: {}}
    },

    actions: {
        save(screen){
            this.screen = screen
        }
    },
    getters: {
        get() {
            return this.screen;
        },
    }
})