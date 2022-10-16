import { isArray } from "@vue/shared";
import { ObjectAny } from "~/src/model/objectAny";
import { useComponentsStore } from "~~/src/store/components";

export function findData(params: ObjectAny) {
    const storeComponents = useComponentsStore();
    const result = {};
    const getConst = (elem) => {
        return elem.value;
    }
    const getContext = (id: string, nc: string) => {
        return storeComponents.getContext(id)[nc];
    }
    const getDataset = (id: string, nc: string) => {
        return storeComponents.getDataset(id)[nc];
    }
    for (const key in params) {
        const elem = params[key];
        if (elem.value !== undefined) {
            result[key] = getConst(elem);
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
        if (isArray(elem)) {
            result[key] = findData(elem[0]);
        }
    }
    return result;

}
