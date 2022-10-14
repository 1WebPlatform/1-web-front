import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
    state: () => {
        return { message: null }
    },
    actions: {
        save(id: number) {
            this.message = id;
        },
        detele() {
            this.message = null;
        }
    },
    getters: {
        get() {
            return this.message;
        }
    }
})