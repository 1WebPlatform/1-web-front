import { Ref } from "vue";
import { getCms } from "~~/src/libs/getCms";
import { loaderCss } from "~~/src/libs/loaderCss";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";

export function table(id: Ref<number>) {
    const { cms } = getCms(id.value);
    (async () => {
        await eventBuild(id.value).create();
        loaderCss(id.value);
    })();
    return { cms }
}