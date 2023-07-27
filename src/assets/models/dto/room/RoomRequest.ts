import {Room} from '../../entity/Room';

export interface RoomAddRequest extends Omit<Room, 'id'> {}
