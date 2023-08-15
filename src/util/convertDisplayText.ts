import {ReservationWithoutRoomId} from '@/assets/models/types/RerservationWithoutRoomId';
import {TechType} from '@/assets/models/types/TechType';
import {convertFirstTextUpperCase} from './convertFirstTextUpperCase';

export const getDisplayTechTypes = (techType: TechType): string => {
  const techTypeMap = Object.entries(techType).filter(
    ([_, isExist]) => isExist,
  );
  let displayText = '';
  techTypeMap.forEach(([type, _]) => {
    displayText = `${displayText}${convertFirstTextUpperCase(type)} `;
  });
  return displayText;
};
export const getDisplayText = (
  text: string | number | undefined,
  expect?: string,
  exception?: string,
) => {
  if (text === undefined || (text as number) <= 0) {
    return exception ?? '';
  }
  return expect ?? text.toString();
};

export const getLastTaggedDisplayText = (lastTagged: string) => {
  if (!lastTagged) {
    return 'No last tag';
  }
  return rewriteLastTagged(lastTagged);
};
const rewriteLastTagged = (lastTagged: string) => {
  return lastTagged.split('.', 1)[0].replaceAll('-', '/').replaceAll('T', ' ');
};
export const getCardReservationId = (cardId: string, reservationId: number) => {
  if (!cardId) {
    return '';
  }
  if (!reservationId) {
    return 'No Reservation';
  }
  return reservationId;
};

export const getCheckedIn = (reservationId: number, isCheckedIn: boolean) => {
  if (reservationId <= 0) {
    return '';
  }
  if (isCheckedIn === false) {
    return 'Not Checked In';
  }
  return 'Checked In';
};

export const getRoomReservationsText = (
  reservations: ReservationWithoutRoomId[],
) => {
  if (!reservations) {
    return '';
  }
  if (reservations.length < 1) {
    return 'No Reservation';
  }
  if (reservations.length === 1) {
    return `#${reservations[0].id} reserved by ${reservations[0].userId}`;
  }
  return `#${reservations[0].id} reserved by ${reservations[0].userId}, ${
    reservations.length - 1
  } more...`;
};
