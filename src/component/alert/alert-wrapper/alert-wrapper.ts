import { loaderCssTemplate } from "~~/src/libs/loaderCss";
import { useAlertStore } from "~~/src/store/alert"

export function alertWrapper() {
    const alertStore = useAlertStore();
    loaderCssTemplate("alert");
    const alert = computed(() => {
        return alertStore.get
    })   
    return {
        alert
    }
}