import {UserAddRequest} from '../../assets/models/dto/user/UserAddRequest';
import {request} from './controller/ApiController';

export const addUser = async (user: UserAddRequest) => {
  return await request.post('/user', user);
};
