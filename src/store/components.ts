import { defineStore } from 'pinia'
import { ObjectAny } from "~/src/model/objectAny";

export const useComponentsStore = defineStore('components', {
    state: () => {
        return { components: {} }
    },

    actions: {
        save(components) {
            this.components = components
        },
        loaderData(id: number, data: ObjectAny[]) {
            this.components[id].dataset = data;
        },
        saveContext(id: number, context: ObjectAny) {
            this.components[id].context = context;
        },
        saveLoader(id: number) {
            this.components[id].loader = true;
        }
    },
    getters: {
        get() {
            return this.components;
        },
        getId() {
            return (id: string) => this.components[id];
        },
        getDataset() {
            return (id: string) => this.components[id].dataset;
        },
        getContext() {
            return (id: string) => this.components[id].context;
        },
        getEvent() {
            return (id: string) => this.components[id].event;
        },
        getSchema() {
            return (id: string) => this.components[id].schema;
        }
    }
})