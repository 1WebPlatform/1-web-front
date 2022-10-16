import { ObjectAny } from "~/src/model/objectAny";
import { HttpMethod } from "~/src/model/httpMethod";
import { useAlertStore } from "../store/alert";


export async function BaseApi(
    url: string,
    key: string,
    method: string = HttpMethod.GET,
    body?: ObjectAny,
    params?: ObjectAny,
) {
    const storeAlert = useAlertStore();
    const baseUrl = useRuntimeConfig().public.API_URL;
    const authorization = useCookie('Authorization')
    const { data, error } = await useFetch(`${baseUrl}/${url}`, {
        method: method,
        params: params,
        body: body,
        key: key,
        headers: {
            "Authorization": authorization.value ? authorization.value : "$2a$06$9/FFxbmYIei.lLZS2huw0ObG5Bu6uUO9zgi1bRQ8sAnuOWgjfO2ea"
        }
    });
    if (data.value?.error_) {
        data.value.error_.type = "error";
        storeAlert.save(data.value.error_);
        return;
    }
    return data.value;
}