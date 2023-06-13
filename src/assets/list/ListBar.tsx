import {UserListResponse} from '../models/dto/user/UserListResponse';
import {CardListResponse} from '../models/dto/card/CardListResponse';
import {CARD, DataTypes, ROOM, USER} from '../static/texts/DataTypes';
import UserListBar from './UserListBar';
import CardListBar from './CardListBar';
import RoomListBar from './RoomListBar';
import {RoomListResponse} from '../models/dto/room/RoomListResponse';

const ListBar = ({
  data,
  type,
  index,
}: {
  data: UserListResponse | CardListResponse | RoomListResponse;
  type: DataTypes;
  index: number;
}) => {
  if (type === USER) {
    return <UserListBar userData={data as UserListResponse} index={index} />;
  }
  if (type === ROOM) {
    return <RoomListBar roomData={data as RoomListResponse} index={index} />;
  }
  if (type === CARD) {
    return <CardListBar cardData={data as CardListResponse} index={index} />;
  }
};

export default ListBar;
