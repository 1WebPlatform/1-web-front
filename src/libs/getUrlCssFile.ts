import { TypeComponent } from "../enum/TypeComponent";
import { useComponentsStore } from "../store/components";

export function getUrlCssFileComponent(id: number) {
    const URL_STATIC = useRuntimeConfig().public.URL_STATIC;
    const storeComponents = useComponentsStore();
    const cms = storeComponents.getId(id.toString());
    return `${URL_STATIC}/style/${TypeComponent[cms.id_type]}/${id}.css`;
}
export function getUrlCssFileTemplate(id: number) {
    const URL_STATIC = useRuntimeConfig().public.URL_STATIC;
    const storeComponents = useComponentsStore();
    const cms = storeComponents.getId(id.toString()); 
}