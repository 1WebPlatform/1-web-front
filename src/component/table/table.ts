import { Ref } from "vue";
import { getCms } from "~~/src/libs/getCms";
import { getUrlCssFileTemplate } from "~~/src/libs/getUrlCssFile";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";

export function table(id: Ref<number>) {
    const { cms } = getCms(id.value);
    const url = getUrlCssFileTemplate(id.value);
    (async () => {
        await eventBuild(id.value).create();
    })();
    return { cms, url }
}