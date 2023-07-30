import {User} from '../../entity/User';

export interface UserListResponse extends Omit<User, 'password'> {}
