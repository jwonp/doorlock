import { Reservation } from "../../entity/Reservation";

export interface ReservationAddRequest extends Omit<Reservation, "id" | "isCheckedIn">{
    
}