import { Ref } from "vue";
import { tableService } from "~/src/component/table/tableService";
import { ObjectAny } from "~~/src/model/objectAny";

export function tableTd(id: Ref<number>, schema: Ref<any>, data: Ref<ObjectAny>) {
    const { focusTable } = tableService(id);
    const { styleW } = tableService(id).styleWidth(schema);
    const style = computed(() => {
        return {
            ...styleW.value
        }
    })
    const clickTd = () => {
        focusTable(data);
        return;
    }
    return { style, clickTd }
}