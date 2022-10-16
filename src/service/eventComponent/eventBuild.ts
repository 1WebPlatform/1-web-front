import { TypeEvent } from "~~/src/enum/TypeEvent";
import { eventComponent } from "./index"

export function eventBuild(id: number) {
    const startEvent = async (name: TypeEvent) => {
        await eventComponent(id.toString(), name);
    }
    return { startEvent }
}