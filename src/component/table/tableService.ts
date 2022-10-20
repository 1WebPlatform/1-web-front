import { Ref } from "vue";

export function tableService(id: Ref<number>) {
    const focusTable = () => {
        
    }
    const styleWidth = (schema) => {
        const styleW = computed(() => {   
            return {
                width: `${schema.value.w}px`
            }
        })
        return {
            styleW
        }
    }
    return {
        styleWidth,
        focusTable
    }
}