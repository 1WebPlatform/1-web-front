import { ObjectAny } from "../model/objectAny";
import { useComponentsStore } from "../store/components";

export function saveContextComponent(id: number, data: ObjectAny) {
    const storeComponents = useComponentsStore();
    storeComponents.saveContext(id, data);
}