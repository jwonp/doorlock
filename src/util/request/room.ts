import {RoomAddRequest} from '@/assets/models/dto/room/RoomRequest';
import {request} from '@/util/request/controller/ApiController';
export const addRoom = async (address: string) => {
  if (!address) {
    return;
  }
  const RoomAddData: RoomAddRequest = {
    address: address,
  };
  return await request.post('/room', RoomAddData);
};
export const deleteSelectedRooms = async (selectedRoomIDList: number[]) => {
  if (!selectedRoomIDList || selectedRoomIDList.length < 1) {
    return;
  }
  const roomListToDelete = {
    idList: selectedRoomIDList,
  };
  return await request.delete('/room', {data: roomListToDelete});
};
