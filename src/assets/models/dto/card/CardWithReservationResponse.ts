import {CardDataState} from '../../../../redux/features/cardState';

export interface CardWithReservationResponse extends CardDataState {
    reservationId:number;
    userId:string;
    roomId:number;
}
