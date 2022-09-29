import { Ref } from "vue";
import { getCms } from "~~/src/libs/getCms";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";

export async function table(id: Ref<number>) {
    const { cms } = getCms(id.value);
    await eventBuild(id.value).create();

    return { cms }
}