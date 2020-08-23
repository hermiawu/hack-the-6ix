import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../services/room/room.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {

  @Input() id: number;
  currentRoom: Room;
  imagePath: string;

  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.currentRoom = this.roomService.getRoomInfo(this.id);
    this.getImagePath(this.currentRoom.type);
    console.log(this.currentRoom);
  }

  getImagePath(roomType: string): void {
    switch (roomType) {
      case 'bathroom':
        this.imagePath = '../../assets/svgs/bathroom.svg';
        break;
      case 'bedroom':
        this.imagePath = '../../assets/svgs/bedroom.svg';
        break;
      case 'kitchen':
        this.imagePath = '../../assets/svgs/kitchen.svg';
        break;
      case 'livingroom':
        this.imagePath = '../../assets/svgs/livingroom.svg';
        break;
      case 'laundry':
        this.imagePath = '../../assets/svgs/laundry.svg';
        break;
      default:
        break;
    }
  }

}
