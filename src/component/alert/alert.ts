import { useAlertStore } from "~~/src/store/alert"

export function alert() {
    const storeAlert = useAlertStore();
    const close = (index:number) => {
        storeAlert.detele(index);
    }
    return {
        close
    }
}