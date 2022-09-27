import { ProceduresApi } from "~/src/api/procedures";
import { useComponentsStore } from "~/src/store/components";
import { findData } from "~/src/service/findData";
import { ProceduresDto } from "~/src/model/proceduresDto";

export async function LoaderTableData(id: number) {
    const store = useComponentsStore();
    const cms = store.getId(id.toString());
    const body = findData(cms.event.create[0].params);
    console.log(body);
    const dataset = await ProceduresApi(body as ProceduresDto);
    console.log(dataset);
}