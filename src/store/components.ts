import {defineStore} from 'pinia'
import {ObjectAny} from "~/src/model/objectAny";

export const useComponentsStore = defineStore('components', {
    state: () => {
        return {components: {}}
    },

    actions: {
        save(components){
            this.components = components
        },
        loaderData(id:number, data:ObjectAny[]){
            this.components[id].dataset = data;
        }
    },
    getters: {
        get() {
            return this.components;
        },
        getId() {
            return (id:string) =>  this.components[id];
        }
    }
})