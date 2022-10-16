import { ProceduresApi } from "~~/src/api/procedures";
import { ObjectAny } from "~~/src/model/objectAny";
import { ProceduresDto } from "~~/src/model/proceduresDto";
import { findData } from "../../findData";

export async function apiProcedures(id: string, params: ObjectAny) {   
    const body = findData(params) as ProceduresDto;
    return await ProceduresApi(body, id);
}