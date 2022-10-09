export function loaderImage(url: string) {
    const URL_STATIC = useRuntimeConfig().public.URL_STATIC_IMAGE;
    return `${URL_STATIC}/${url}`;
}
