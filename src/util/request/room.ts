import {RoomAddRequest} from '@/assets/models/dto/room/RoomRequest';
import {request} from '@/util/request/controller/ApiController';
export const addRoom = async (jwt:string,address: string) => {
  if (!address) {
    return;
  }
  const RoomAddData: RoomAddRequest = {
    address: address,
  };
  return await request(jwt).post('/room', RoomAddData);
};
export const deleteSelectedRooms = async (jwt:string,selectedRoomIDList: number[]) => {
  if (!selectedRoomIDList || selectedRoomIDList.length < 1) {
    return;
  }
  const roomListToDelete = {
    idList: selectedRoomIDList,
  };
  return await request(jwt).delete('/room', {data: roomListToDelete});
};
