import { TypeComponent } from "../enum/TypeComponent";
import { useComponentsStore } from "../store/components";
import { useCssStore } from "../store/css";

export function loaderCss(id: number) {
    const URL_STATIC = useRuntimeConfig().public.URL_STATIC;
    const storeComponents = useComponentsStore();
    const cms = storeComponents.getId(id.toString());
    loaderCssTemplate(TypeComponent[cms.id_type]);
    /** тут нужно условия если ли файл! */
    if (cms.file_css) {
        loaderLinkCss(
            `${URL_STATIC}/style/${TypeComponent[cms.id_type]}/${id}.css`,
            `${TypeComponent[cms.id_type]}-${id}`
        );
    }
    /** тут нужно условия если ли файл! */
}

export function loaderCssTemplate(look: string) {
    const URL_STATIC = useRuntimeConfig().public.URL_STATIC;
    loaderLinkCss(`${URL_STATIC}/style/template/${look}.css`, look);
}


function loaderLinkCss(url: string, key: string) {
    const storeCss = useCssStore();
    /** проверка что файл не был уже загружен */
    if (!storeCss.get(key)) {
        storeCss.save(key, url);
    }
}