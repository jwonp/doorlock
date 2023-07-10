export const getDisplayText = (text: string | number | undefined) => {
  if (typeof text === undefined) {
    return '';
  }
  if (typeof text === 'string') {
    return text;
  }
  return (text as number) > 0 ? text.toString() : '';
};

export const getLastTaggedDisplayText = (
  userId: string,
  lastTagged: string,
) => {
  if (!userId) {
    return '';
  }
  if (!lastTagged) {
    return 'Not Tagged';
  }
  return lastTagged;
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
