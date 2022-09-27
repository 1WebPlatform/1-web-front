import { ObjectAny } from "~/src/model/objectAny";
import { useComponentsStore } from "~~/src/store/components";

export function findData(params: ObjectAny) {
    const componentsStore = useComponentsStore();
    const result = {};
    const getConst = (key: string, elem) => {
        return elem.value;
    }
    const getContext = (id: string, nc: string) => {
        return componentsStore.getContext(id)[nc];
    }
    const getDataset = (id:string, nc: string) => {
        return componentsStore.getDataset(id)[nc];
    }
    for (const key in params) {
        const elem = params[key];
        if (elem.value !== undefined) {
            result[key] = getConst(key, elem);
            continue;
        }
        if (elem.type === "context") {
            result[key] = getContext(elem.id, elem.nc);
            continue;
        }
        if (elem.type === "dataset") {
            result[key] = getDataset(elem.id, elem.nc);
            continue;
        }
    }
    return result;

}
