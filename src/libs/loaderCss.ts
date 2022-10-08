import { TypeComponent } from "../enum/TypeComponent";
import { useComponentsStore } from "../store/components";

export function loaderCss(id: number) {
    const URL_STATIC = useRuntimeConfig().public.URL_STATIC;
    const storeComponents = useComponentsStore();
    const cms = storeComponents.getId(id.toString());
    const link_component = `${URL_STATIC}/style/${TypeComponent[cms.id_type]}/${id}.css`;
    const link_template = `${URL_STATIC}/style/template/${TypeComponent[cms.id_type]}.css`;
    loaderLinkCss(link_template);

    /** тут нужно условия если ли файл! */
    loaderLinkCss(link_component);
    /** тут нужно условия если ли файл! */
}

function loaderLinkCss(url: string) {
    useHead(()=>{
        return {
            link: [
                {
                  rel: 'stylesheet',
                  href: url
                }
              ]   
        }
    })
}