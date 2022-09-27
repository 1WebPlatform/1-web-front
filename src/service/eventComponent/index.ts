import { useComponentsStore } from "~~/src/store/components";
import { callback } from "~~/src/service/callback/index";
export async function eventComponent(id: string, eventName: string) {
    const componentsStore = useComponentsStore();
    if (componentsStore.getEvent(id)?.[eventName]) {
        for (const callbackElem of componentsStore.getEvent(id)[eventName]) {       
            await callback[callbackElem.fun](id,callbackElem.params);  
        }    
    }
}