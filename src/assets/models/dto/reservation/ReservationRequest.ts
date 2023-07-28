import {Reservation} from '../../entity/Reservation';

export interface ReservationAddRequest
  extends Omit<Reservation, 'id' | 'isCheckedIn'> {}
export interface ReservationModfiyRequest
  extends Partial<Omit<Reservation, 'id' | 'isCheckedIn'>> {}
