import {defineStore} from 'pinia'
import {ComponentApi} from "~/src/api/component";
import {ObjectAny} from "~/src/model/objectAny";

export const useComponentsStore = defineStore('counter', {
    state: () => {
        return {components: {}}
    },

    actions: {
        async loader(id:number){
           this.components = await ComponentApi(id);
        },
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