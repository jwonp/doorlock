import {request} from '@/util/request/controller/ApiController';
export const addRoom =async()=>{
    
} 
export const deleteSelectedRooms = async(selectedRoomIDList:number[]) =>{
    if(!selectedRoomIDList || selectedRoomIDList.length < 1) {
        return;
    }
    const roomListToDelete = {
        idList:selectedRoomIDList
    }
    return await request.delete('/room',{data:roomListToDelete});
};