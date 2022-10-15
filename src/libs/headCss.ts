import { useCssStore } from "../store/css";

export function headCss() {
    const storeCss = useCssStore();
    useHead(() => {
        let link = [];
        for (const key in storeCss.getAll) {
            const value = storeCss.getAll[key];
            link.push({ rel: 'stylesheet', href: value })
        }
        return { link };
    });
}