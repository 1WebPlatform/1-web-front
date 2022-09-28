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
    const alertStore = useAlertStore();
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
    if (data.value.error_) {
        alertStore.save(data.value.error_);
        return;
    }
    return data.value;
}