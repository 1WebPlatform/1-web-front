import { ObjectAny } from "~~/src/model/objectAny";
import { useMessageStore } from "~~/src/store/message";

export function openMessage(id: string, params: ObjectAny) {
    const idMessage = params.id.value;
    const messageStore = useMessageStore(); 
    messageStore.save(idMessage);
}