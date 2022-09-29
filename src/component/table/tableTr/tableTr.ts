import { Ref } from "vue";
import { getCms } from "~~/src/libs/getCms";

export async function tableTr(id: Ref<number>) {
    const { cms } = getCms(id.value);
    console.log(cms.value);    
    return { cms };
}