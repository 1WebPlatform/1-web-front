import { Ref } from "vue";
import { tableService } from "~/src/component/table/tableService";
export function tableTh(id: Ref<number>, schema: Ref<any>) {
    const { styleW } = tableService(id).styleWidth(schema);
    const style = computed(() => {
        return {
            ...styleW.value
        }
    })
    return {
        style
    }
}