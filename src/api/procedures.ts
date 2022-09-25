import {BaseApi} from "~/src/api/index";
import {ProceduresDto} from "~/src/model/proceduresDto";
import {HttpMethod} from "~/src/model/httpMethod";

export async function ProceduresApi(body: ProceduresDto) {
    return (await BaseApi(`procedures`, "procedures" , HttpMethod.POST, body));
}