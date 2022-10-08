import { defineStore } from 'pinia'

export const useCssStore = defineStore('css', {
    state: () => {
        return { css: {} }
    },

    actions: {
        save(key: string) {
            this.css[key] = true;
        }
    },
    getters: {
        get() {
            return (key: string) => this.css[key];
        },
    }
})