import { useComponentsStore } from "~~/src/store/components";
import { callback } from "~~/src/service/callback/index";
export async function eventComponent(id: string, eventName: string) {
    let result = [];
    const componentsStore = useComponentsStore();
    if (componentsStore.getEvent(id)?.[eventName]) {
        for (const [index, callbackElem] of componentsStore.getEvent(id)[eventName].entries()) {
            result[index] = await callback[callbackElem.fun](id, callbackElem.params);
        }
    }
}