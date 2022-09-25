import {ObjectAny} from "~/src/model/objectAny";

export  interface ProceduresDto{
    name:string;
    schema: string;
    body: ObjectAny;
}