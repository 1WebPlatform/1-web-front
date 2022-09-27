import { BaseApi } from "~/src/api/index";

export async function ComponentApi(id: number) {
    return await BaseApi(`screen/${id}`, `component-${id}`)
}