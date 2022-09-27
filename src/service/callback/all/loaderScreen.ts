import { ComponentApi } from "~~/src/api/component";
import { useComponentsStore } from "~~/src/store/components";
import { useScreenStore } from "~~/src/store/screen";

export async function LoaderScreen(id: number){
    const storeComponents = useComponentsStore();
    const storeScreen = useScreenStore();
    const data = await ComponentApi(id);
    storeComponents.save(data.component);
    storeScreen.save(data.screen);
}