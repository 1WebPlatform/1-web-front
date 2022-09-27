import { ObjectAny } from "~/src/model/objectAny";

export function findData(params: ObjectAny) {
    let result = {};
    for (const key in params) {
        const elem = params[key];
        if (elem.value !== undefined) {
            result[key] = elem.value;
        }
    }
    return result;
}