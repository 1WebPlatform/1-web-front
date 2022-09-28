import { useComponentsStore } from "../store/components";

export function getCms(id: number) {
    const storeComponents = useComponentsStore();
    const cms = computed(() => {
        return storeComponents.getId(id.toString())
    })
    return {
        cms
    }
}