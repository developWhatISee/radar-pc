import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  displayedColumns: string[] = ['equipmentId', 'building', 'college', 'studentName', 'isInBed', 'status', 'createTime', 'lastEditTime', 'actions'];
  dataSource = new MatTableDataSource<Equipment>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit () {
    this.dataSource.paginator = this.paginator;
  }

  getRecord (name: string) {
    alert('打开窗口编辑' + name);
  }

  activate (name: string) {
    alert('已启用' + name);
  }

  inBedColor (v: string) {
    return v === '否' ? { color: 'red' } : { color: 'white' };
  }
}

export interface Equipment {
  isInBed: string;
  status: string;
  createTime: string;
  lastEditTime: string;
  equipmentId: string;
  studentName: string;
  building: string;
  college: string;
}

const ELEMENT_DATA: Equipment[] = [
  {
    isInBed: '是',
    status: '异常',
    createTime: '2023-06-18 14:04',
    lastEditTime: '2023-07-06 23:45',
    equipmentId: 'RadarXP1108',
    studentName: '秦静',
    building: 'A#4011',
    college: '经济学院'
  },
  {
    isInBed: '否',
    status: '正常',
    createTime: '2023-08-29 03:03',
    lastEditTime: '2023-07-01 17:10',
    equipmentId: 'RadarXP1224',
    studentName: '马超',
    building: 'A#7018',
    college: '生物医学工程学院'
  },
  {
    isInBed: '是',
    status: '正常',
    createTime: '2023-06-22 12:44',
    lastEditTime: '2023-03-20 17:57',
    equipmentId: 'RadarXP1932',
    studentName: '何娟',
    building: 'A#4807',
    college: '新闻与传播学院'
  },
  {
    isInBed: '否',
    status: '正常',
    createTime: '2023-05-29 22:35',
    lastEditTime: '2023-02-20 06:57',
    equipmentId: 'RadarXP1467',
    studentName: '黎军',
    building: 'A#2953',
    college: '经济学院'
  }
];
