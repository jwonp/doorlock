export const getPhoneNumber = (prePhoneNumber: string, pressedKey: string) => {
  if (pressedKey === 'Backspace') {
    return prePhoneNumber.slice(0, prePhoneNumber.length - 1);
  }
  const key = pressedKey;
  const phoneNumber = `${prePhoneNumber}${key}`;
  if (
    (phoneNumber.length === 3 ||
      (phoneNumber.length === 4 && !phoneNumber.includes('-'))) &&
    key !== '-'
  ) {
    const before = phoneNumber.substring(0, 3);
    const after = phoneNumber.substring(3);
    const newPhoneNumber = `${before}-${after}`;
    return newPhoneNumber;
  }
  if (
    (phoneNumber.length === 7 ||
      ((phoneNumber.length === 8 || phoneNumber.length === 9) &&
        phoneNumber.split('-').length < 3)) &&
    key !== '-'
  ) {
    const before = phoneNumber.substring(0, 7);
    const after = phoneNumber.substring(7);
    const newPhoneNumber = `${before}-${after}`;
    return newPhoneNumber;
  }
  if (phoneNumber.length === 12 && key !== '-' && phoneNumber[7] === '-') {
    const newPhoneNumber = `${phoneNumber.substring(0, 7)}${phoneNumber[8]}${
      phoneNumber[7]
    }${phoneNumber.substring(9)}`;
    return newPhoneNumber;
  }
  return phoneNumber;
};
