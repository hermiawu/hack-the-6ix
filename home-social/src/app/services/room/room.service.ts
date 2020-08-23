import { Injectable } from '@angular/core';
import { Room } from '../../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [
    {
      id: 1,
      type: 'laundry',
      name: 'laundry 1',
      isBookable: true
    },
    {
      id: 2,
      type: 'bedroom',
      name: 'Celine',
      isBookable: false
    },
    {
      id: 3,
      type: 'kitchen',
      name: 'kitchen',
      isBookable: true
    },
    {
      id: 4,
      type: 'livingroom',
      name: 'living',
      isBookable: true
    },
    {
      id: 5,
      type: 'bedroom',
      name: 'Hao',
      isBookable: true
    }
  ];
  constructor() { }

  getAllRooms(): Room[] {
    return this.rooms;
  }

  getRoomInfo(id: number): Room {
    return this.rooms[id - 1];
  }

}
