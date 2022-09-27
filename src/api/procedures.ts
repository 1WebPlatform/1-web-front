import { BaseApi } from "~/src/api/index";
import { ProceduresDto } from "~/src/model/proceduresDto";
import { HttpMethod } from "~/src/model/httpMethod";

export async function ProceduresApi(body: ProceduresDto, key:string) {
    return (await BaseApi(`procedures`, `procedures-${key}`, HttpMethod.POST, body));
}