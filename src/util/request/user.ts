import axios from 'axios';
import {UserAddRequest} from '../../assets/models/dto/user/UserAddRequest';
import {request} from './controller/ApiController';
import Config from 'react-native-config';

export const addUser = async (user: UserAddRequest) => {
  return await request.post(`${Config.BACKEND_ENDPOINT}/user`, user);
};
