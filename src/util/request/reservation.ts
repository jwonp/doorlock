import {
  ReservationAddRequest,
  ReservationModfiyRequest,
  ReservationSetCheckIn,
} from '@/assets/models/dto/reservation/ReservationRequest';
import {request} from '@/util/request/controller/ApiController';
import Config from 'react-native-config';
export const addReservation = async (reservation: ReservationAddRequest) => {
  return await request.post(
    `${Config.BACKEND_ENDPOINT}/reservation`,
    reservation,
  );
};
export const modifyReservation = async (
  id: number,
  reservation: ReservationModfiyRequest,
) => {
  return await request.patch(
    `${Config.BACKEND_ENDPOINT}/reservation?id=${id}`,
    {
      reservation,
    },
  );
};

export const deleteSelectedReservations = async (
  seelctedReservationIDList: number[],
) => {
  if (!seelctedReservationIDList || seelctedReservationIDList.length < 1) {
    return;
  }
  const reservationListToDelete = {
    idList: seelctedReservationIDList,
  };
  return await request.delete('/reservation', {data: reservationListToDelete});
};
export const checkOut = async (reservationId: number) => {
  const reservationListToDelete = {
    idList: [reservationId],
  };
  return await request.delete('/reservation', {data: reservationListToDelete});
};

export const setCheckIn = async (reservationId: number, checkIn: boolean) => {
  const patchData: ReservationSetCheckIn = {
    reservationId: reservationId,
    checkIn: checkIn,
  };
  return await request.patch('/reservation/checkin', patchData);
};
