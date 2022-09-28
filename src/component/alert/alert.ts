import { useAlertStore } from "~~/src/store/alert"

export function alert(){
    const alertStore = useAlertStore();
    const alert = computed(()=>{
        return alertStore.get
    })
    return {
        alert
    }
}