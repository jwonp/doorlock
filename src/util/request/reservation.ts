import {
  ReservationAddRequest,
  ReservationModfiyRequest,
  ReservationSetCheckIn,
} from '@/assets/models/dto/reservation/ReservationRequest';
import {request} from '@/util/request/controller/ApiController';
import Config from 'react-native-config';
export const addReservation = async (
  jwt: string,
  reservation: ReservationAddRequest,
) => {
  return await request(jwt).post(
    `${Config.BACKEND_ENDPOINT}/reservation`,
    reservation,
  );
};
export const modifyReservation = async (
  jwt: string,
  id: number,
  reservation: ReservationModfiyRequest,
) => {
  return await request(jwt).patch(
    `${Config.BACKEND_ENDPOINT}/reservation?id=${id}`,

    reservation,
  );
};

export const deleteSelectedReservations = async (
  jwt: string,
  seelctedReservationIDList: number[],
) => {
  if (!seelctedReservationIDList || seelctedReservationIDList.length < 1) {
    return;
  }
  const reservationListToDelete = {
    idList: seelctedReservationIDList,
  };
  return await request(jwt).delete('/reservation', {
    data: reservationListToDelete,
  });
};
export const checkOut = async (jwt: string, reservationId: number) => {
  const reservationListToDelete = {
    idList: [reservationId],
  };
  return await request(jwt).delete('/reservation', {
    data: reservationListToDelete,
  });
};

export const setCheckIn = async (
  jwt: string,
  reservationId: number,
  checkIn: boolean,
) => {
  const patchData: ReservationSetCheckIn = {
    reservationId: reservationId,
    checkIn: checkIn,
  };
  return await request(jwt).patch('/reservation/checkin', patchData);
};
