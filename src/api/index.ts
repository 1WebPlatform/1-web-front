import {ObjectAny} from "~/src/model/objectAny";
import {HttpMethod} from "~/src/model/httpMethod";


export async function BaseApi(
    url: string,
    method: string = HttpMethod.GET,
    body?: ObjectAny,
    params?: ObjectAny,
) {
    const baseUrl = useRuntimeConfig().public.API_URL;
    const {data, error} = await useFetch(`${baseUrl}/${url}`, {
        method: method,
        params: params,
        body: body,
        headers: {
            "Authorization":"$2a$06$9/FFxbmYIei.lLZS2huw0ObG5Bu6uUO9zgi1bRQ8sAnuOWgjfO2ea"
        }
    });
    // console.log(data)
    return data.value;
}