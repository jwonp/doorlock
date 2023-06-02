import 'react-native-get-random-values';
import {v4, NIL, validate} from 'uuid';
export const createUserId = () => {
  return v4();
};

export const createNilUserId = () => {
  return NIL;
};

export const validateUserId = (userId: string) => {
  return validate(userId);
};
