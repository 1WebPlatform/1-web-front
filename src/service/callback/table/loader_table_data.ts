import { ProceduresApi } from "~/src/api/procedures";
import { useComponentsStore } from "~/src/store/components";
import { findData } from "~/src/service/findData";
import { ProceduresDto } from "~/src/model/proceduresDto";
import { ObjectAny } from "~~/src/model/objectAny";

export async function LoaderTableData(id: number, params: ObjectAny[]) {
    const componentsStore = useComponentsStore();
    const body = findData(params);
    const dataset = await ProceduresApi(body as ProceduresDto, id.toString());
    componentsStore.loaderData(id, dataset);
}