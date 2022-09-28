import { useAlertStore } from "~~/src/store/alert"

export function alertWrapper() {
    const alertStore = useAlertStore();
    const alert = computed(() => {
        return alertStore.get
    })   
    return {
        alert
    }
}