import { Ref } from "vue";
import { ObjectAny } from "~~/src/model/objectAny";
import { useTableStore } from "~~/src/store/table";

export function tableService(id: Ref<number>) {
    const storeTable = useTableStore();
    const focusTable = (data: Ref<ObjectAny>) => {
        storeTable.saveFocus(id.value.toString(), data.value);
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