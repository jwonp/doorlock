import {TechType} from '../../types/TechType';
import {CardDataState} from '../../../../redux/features/selected/cardState';

export interface CardAddResponse {
  id: string;
  maxSize: number;
  type: string;
  techType: TechType;
  lastTagged: string;
}

export interface CardWithReservationResponse extends CardDataState {
  reservationId: number;
  userId: string;
  roomId: number;
}
