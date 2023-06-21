interface UserModifyRequest {
   userId: string;
}


export interface UserModifyCardRequest extends UserModifyRequest {
  cardId: string;
}

export interface UserModifyRoomRequest extends UserModifyRequest {
  roomId: number;
}
