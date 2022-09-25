import {defineStore} from 'pinia'
import {ComponentApi} from "~/src/api/component";

export const useComponentsStore = defineStore('counter', {
    state: () => {
        return {components: {}}
    },

    actions: {
        async loader(id:number){
           this.components = await ComponentApi(id);
        }
    },
    getters: {
        get() {
            return this.components;
        },
        getId(id: string) {
            return this.components[id];
        }
    }
})