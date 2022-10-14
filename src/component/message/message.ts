import { Ref, computed } from "vue";
import { getCms } from "~~/src/libs/getCms";

export function message(id: Ref<number>) {
    const { cms } = getCms(id.value);
    const textOk = computed(() => {
        return cms.value.params.name_ok ?? "Ок"
    })
    const textCancel = computed(() => {
        return cms.value.params.name_cancel ?? "Отмена"
    })
    return { cms, textOk, textCancel }
}