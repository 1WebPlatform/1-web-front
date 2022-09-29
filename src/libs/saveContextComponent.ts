import { ObjectAny } from "../model/objectAny";
import { useComponentsStore } from "../store/components";

export function saveContextComponent(id:number, data:ObjectAny){
    const componentsStore = useComponentsStore();
    componentsStore.saveContext(id, data);
}