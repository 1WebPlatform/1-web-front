import { ObjectAny } from "~/src/model/objectAny";
import { HttpMethod } from "~/src/model/httpMethod";


export async function BaseApi(
    url: string,
    key: string,
    method: string = HttpMethod.GET,
    body?: ObjectAny,
    params?: ObjectAny,
) {
    const baseUrl = useRuntimeConfig().public.API_URL;
    const authorization = useCookie('Authorization')
    const { data, error } = await useFetch(`${baseUrl}/${url}`, {
        method: method,
        params: params,
        body: body,
        key: key,
        headers: {
            "Authorization": authorization.value
        }
    });
    return data.value;
}