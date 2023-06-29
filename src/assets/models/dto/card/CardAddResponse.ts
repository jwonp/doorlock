import { TechType } from "../../types/TechType";

 export interface CardAddResponse {
    id:string,
    maxSize:number,
    type:string,
    techType:TechType
}
