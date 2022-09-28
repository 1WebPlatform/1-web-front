import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
    state: () => {
        return { alert: [] }
    },
    actions: {
        save (alert:any) {        
            this.alert.push(alert);
        },
        detele(index:number){
            this.alert.splice(index, 1);
        }
    },
    getters: {
        get() {
            return this.alert;
        }
    }
})