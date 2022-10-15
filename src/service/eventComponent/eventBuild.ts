import { TypeEvent } from "~~/src/enum/TypeEvent";
import { eventComponent } from "./index"

export function eventBuild(id: number) {
    const startEvent = (name: TypeEvent) => {
        return async () => {
            await eventComponent(id.toString(), name);
        }
    }
    return { startEvent }
}