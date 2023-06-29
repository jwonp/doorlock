import {keys} from 'ts-transformer-keys';
import {UserDataState} from '../../../../redux/features/userState';
export interface UserListResponse extends UserDataState {}

export const UserListResponseKeys = keys<UserListResponse>();
