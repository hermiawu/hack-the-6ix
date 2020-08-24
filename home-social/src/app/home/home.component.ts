import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
  GridsterItemComponentInterface
} from 'angular-gridster2';
import { RoomService } from '../services/room/room.service';
import { Room } from '../models/room';
import { HomeService } from '../services/home/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


  constructor(
    public roomService: RoomService,
  ) {

  }

  options: GridsterConfig;
  dashboard: GridsterItem[] = [];
  currentRooms: Room[];
  selectedRoomId = 0;

  ngOnInit(): void {
    this.options = {
      itemChangeCallback: this.updateItems,
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 200,
      minCols: 4,
      maxCols: 4,
      minRows: 8,
      maxRows: 8,
      maxItemCols: 4,
      minItemCols: 1,
      maxItemRows: 6,
      minItemRows: 1,
      maxItemArea: 24,
      minItemArea: 1,
      defaultItemCols: 2,
      defaultItemRows: 2,
      fixedColWidth: 100,
      fixedRowHeight: 100,
      keepFixedHeightInMobile: true,
      keepFixedWidthInMobile: true,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: false,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.OnDragAndResize,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    this.currentRooms = this.roomService.getAllRooms();
    console.log(this.currentRooms);
    this.currentRooms.forEach(room => {
      const gridItem: GridsterItem = {
        cols: room.size,
        rows: room.size,
        y: 0,
        x: 0,
        id: room.id
      };
      this.dashboard.push(gridItem);
    });
  }

  updateItems(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    console.log(item);
    this.selectedRoomId = item.id;
    // var updatedRoom = this.roomService.rooms[item.Id - 1];
    // updatedRoom.x = item.x;
    // updatedRoom.y = item.y;
    // console.log(updatedRoom);
    // this.roomService.updateRoom(updatedRoom);

  }

  changedOptions() {
    this.options.api.optionsChanged();
  }
}

