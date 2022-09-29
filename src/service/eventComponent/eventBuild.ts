import { eventComponent } from "./index"

export function eventBuild(id:number) {
    const click = () => {
        eventComponent(id.toString(), "click");
    }
    return { click }
}