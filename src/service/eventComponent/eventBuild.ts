import { eventComponent } from "./index"

export function eventBuild(id: number) {
    const click = async () => {
        await eventComponent(id.toString(), "click");
    }
    const create = async () => {
        eventComponent(id.toString(), "create");
    }
    return { click, create }
}