import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
    state: () => {
        return { alert: [] }
    },
    actions: {
        save (alert:any) {
            this.alert.push(alert);
        }
    },
    getters: {
        get() {
            return this.alert;
        }
    }
})