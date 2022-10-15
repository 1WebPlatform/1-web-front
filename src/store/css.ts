import { defineStore } from 'pinia'

export const useCssStore = defineStore('css', {
    state: () => {
        return { css: {} }
    },

    actions: {
        save(key: string, url: string) {
            this.css[key] = url;
        }
    },
    getters: {
        get() {
            return (key: string) => this.css[key];
        },
        getAll() {
            return this.css
        }
    }
})