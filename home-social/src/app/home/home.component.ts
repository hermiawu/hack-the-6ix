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
  GridType
} from 'angular-gridster2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  constructor() {

  }

  ngOnInit(): void {
    this.options = {
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

    this.dashboard = [
      { cols: 1, rows: 1, y: 0, x: 0, id: 1 },
      { cols: 2, rows: 2, y: 0, x: 2, id: 2 },
      { cols: 2, rows: 2, y: 1, x: 0, id: 3 },
      { cols: 2, rows: 2, y: 1, x: 0, id: 4 },
      { cols: 2, rows: 2, y: 2, x: 2, id: 5 },
      { cols: 1, rows: 1, y: 2, x: 2, id: 6 },
    ];
  }
}

