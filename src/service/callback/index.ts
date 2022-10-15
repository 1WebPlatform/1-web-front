import { apiProcedures } from "./all/apiProcedures";
import { openMessage } from "./message/open_message";
import { LoaderTableData } from "./table/loader_table_data";
export const callback = {
    loader_table_data: LoaderTableData,
    api_procedures: apiProcedures,
    open_message: openMessage,
}