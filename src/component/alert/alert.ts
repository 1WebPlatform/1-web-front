import { useAlertStore } from "~~/src/store/alert"

export function alert() {
    const alertStore = useAlertStore();
    const close = (index:number) => {
        alertStore.detele(index);
    }
    return {
        close
    }
}