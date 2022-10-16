import { loaderCssTemplate } from "~~/src/libs/loaderCss";
import { useAlertStore } from "~~/src/store/alert"

export function alertWrapper() {
    const storeAlert = useAlertStore();
    loaderCssTemplate("alert");
    const alert = computed(() => {
        return storeAlert.get
    })   
    return {
        alert
    }
}