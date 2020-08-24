import { Injectable } from '@angular/core';
import { Room } from '../../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  public rooms: Room[] = [
    {
      id: 1,
      type: 'laundry',
      name: 'laundry 1',
      isBookable: true,
      size: 1,
      x: 0,
      y: 0,
    },
    {
      id: 2,
      type: 'bedroom',
      name: 'Celine',
      isBookable: false,
      size: 2,
      x: 0,
      y: 0,
    },
    {
      id: 3,
      type: 'bedroom',
      name: 'bedroom 2',
      isBookable: false,
      size: 2,
      x: 0,
      y: 0,
    },
    {
      id: 4,
      type: 'bathroom',
      name: 'bathroom',
      isBookable: false,
      size: 1,
      x: 0,
      y: 0,
    },
    {
      id: 5,
      type: 'kitchen',
      name: 'kitchen',
      isBookable: true,
      size: 2,
      x: 0,
      y: 0,
    },
    {
      id: 6,
      type: 'livingroom',
      name: 'livingroom',
      isBookable: true,
      size: 3,
      x: 0,
      y: 0,
    }
  ];
  constructor() { }

  getAllRooms(): Room[] {
    return this.rooms;
  }

  getRoomInfo(id: number): Room {
    var findItem = new Room();
    this.rooms.forEach(element => {
      if (id === element.id) {
        findItem = element;
      }
    });
    return findItem;
  }

  addRoom(room: Room): void {
    if (room.type === 'laundry' || room.type === 'bathroom') {
      room.size = 1;
      room.x = 0;
      room.y = 0;
    }
    else if (room.type === 'kitchen' || room.type === 'livingroom') {
      room.size = 3;
      room.x = 0;
      room.y = 0;
    }
    else {
      room.size = 2;
      room.x = 0;
      room.y = 0;
    }
    this.rooms.push(room);
  }

  updateRoom(room: Room) {
    this.rooms.forEach(element => {
      if (room.id === element.id) {
        element = room;
      }
    });
  }

}
