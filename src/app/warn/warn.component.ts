import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {
  displayedColumns: (keyof WarnInfo)[] = [
    'studentName', 'college','building',
    'asleepRate', 'vacancy', 'bodyTemperature',
    'alertLevel', 'alertTime', 'alertStatus',
    'handleEfficiency', 'handleTime', 'handledResult'
  ];
  dataSource = new MatTableDataSource<WarnInfo>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor () { }

  ngOnInit (): void {
    this.dataSource.paginator = this.paginator;
  }

  getAlertStatusColorStyle (status: string) {
    return status === '待处理' ? { color: '#0075FF' } : { color: '#2FBA7C' };
  }

  getLevelTagStyle (level: string) {
    switch (level) {
      case '一级':
        return {
          color: 'white',
          width: '64px',
          height: '28px',
          background: '#F18F27',
          opacity: 0.8,
          'border-radius': '14px',
        };
      case '二级':
        return {
          color: 'white',
          width: '64px',
          height: '28px',
          background: '#0075FF',
          opacity: 0.8,
          'border-radius': '14px',
        };
      default:
        return {
          color: 'white',
          width: '64px',
          height: '28px',
          background: '#2FBA7C',
          opacity: 0.8,
          'border-radius': '14px',
        };
    }
  }
}

export interface WarnInfo {
  asleepRate: string;
  vacancy: string;
  bodyTemperature: string;
  alertLevel: string;
  alertTime: string;
  alertStatus: string;
  handleEfficiency: string;
  handleTime: string;
  handledResult: string;
  studentName: string;
  building: string;
  college: string;
}

// for demo
const ELEMENT_DATA: WarnInfo[] = [
  {
    asleepRate: '83',
    vacancy: '12',
    bodyTemperature: '38.9',
    alertLevel: '三级',
    alertTime: '2015-05-13 17:01',
    alertStatus: '已处理',
    handleEfficiency: '21.1 h',
    handleTime: '1990-08-01 08:20',
    handledResult: '疾病问题',
    studentName: '唐平',
    building: 'A#4318',
    college: '经济学院'
  },
  {
    asleepRate: '97',
    vacancy: '3',
    bodyTemperature: '37',
    alertLevel: '一级',
    alertTime: '1979-06-10 00:18',
    alertStatus: '已处理',
    handleEfficiency: '2.1h',
    handleTime: '1983-10-09 09:09',
    handledResult: '情感问题',
    studentName: '叶超',
    building: 'A#5351',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '77',
    vacancy: '46',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2005-01-04 11:25',
    alertStatus: '已处理',
    handleEfficiency: '0.6 h',
    handleTime: '1997-02-04 03:18',
    handledResult: '疾病问题',
    studentName: '陈杰',
    building: 'A#3273',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '83',
    vacancy: '79',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2012-02-27 19:44',
    alertStatus: '待处理',
    handleEfficiency: '2 h',
    handleTime: '2001-11-11 22:08',
    handledResult: '疾病问题',
    studentName: '白桂英',
    building: 'A#9973',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '64',
    vacancy: '76',
    bodyTemperature: '35.8',
    alertLevel: '一级',
    alertTime: '2012-01-03 01:30',
    alertStatus: '待处理',
    handleEfficiency: '5 h',
    handleTime: '2002-06-18 11:59',
    handledResult: '疾病问题',
    studentName: '文娜',
    building: 'A#7764',
    college: '经济学院'
  },
    {
    asleepRate: '83',
    vacancy: '12',
    bodyTemperature: '38.9',
    alertLevel: '三级',
    alertTime: '2015-05-13 17:01',
    alertStatus: '已处理',
    handleEfficiency: '21.1 h',
    handleTime: '1990-08-01 08:20',
    handledResult: '疾病问题',
    studentName: '唐平',
    building: 'A#4318',
    college: '经济学院'
  },
  {
    asleepRate: '97',
    vacancy: '3',
    bodyTemperature: '37',
    alertLevel: '一级',
    alertTime: '1979-06-10 00:18',
    alertStatus: '已处理',
    handleEfficiency: '2.1h',
    handleTime: '1983-10-09 09:09',
    handledResult: '情感问题',
    studentName: '叶超',
    building: 'A#5351',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '77',
    vacancy: '46',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2005-01-04 11:25',
    alertStatus: '已处理',
    handleEfficiency: '0.6 h',
    handleTime: '1997-02-04 03:18',
    handledResult: '疾病问题',
    studentName: '陈杰',
    building: 'A#3273',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '83',
    vacancy: '79',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2012-02-27 19:44',
    alertStatus: '待处理',
    handleEfficiency: '2 h',
    handleTime: '2001-11-11 22:08',
    handledResult: '疾病问题',
    studentName: '白桂英',
    building: 'A#9973',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '64',
    vacancy: '76',
    bodyTemperature: '35.8',
    alertLevel: '一级',
    alertTime: '2012-01-03 01:30',
    alertStatus: '待处理',
    handleEfficiency: '5 h',
    handleTime: '2002-06-18 11:59',
    handledResult: '疾病问题',
    studentName: '文娜',
    building: 'A#7764',
    college: '经济学院'
  },
    {
    asleepRate: '83',
    vacancy: '12',
    bodyTemperature: '38.9',
    alertLevel: '三级',
    alertTime: '2015-05-13 17:01',
    alertStatus: '已处理',
    handleEfficiency: '21.1 h',
    handleTime: '1990-08-01 08:20',
    handledResult: '疾病问题',
    studentName: '唐平',
    building: 'A#4318',
    college: '经济学院'
  },
  {
    asleepRate: '97',
    vacancy: '3',
    bodyTemperature: '37',
    alertLevel: '一级',
    alertTime: '1979-06-10 00:18',
    alertStatus: '已处理',
    handleEfficiency: '2.1h',
    handleTime: '1983-10-09 09:09',
    handledResult: '情感问题',
    studentName: '叶超',
    building: 'A#5351',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '77',
    vacancy: '46',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2005-01-04 11:25',
    alertStatus: '已处理',
    handleEfficiency: '0.6 h',
    handleTime: '1997-02-04 03:18',
    handledResult: '疾病问题',
    studentName: '陈杰',
    building: 'A#3273',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '83',
    vacancy: '79',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2012-02-27 19:44',
    alertStatus: '待处理',
    handleEfficiency: '2 h',
    handleTime: '2001-11-11 22:08',
    handledResult: '疾病问题',
    studentName: '白桂英',
    building: 'A#9973',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '64',
    vacancy: '76',
    bodyTemperature: '35.8',
    alertLevel: '一级',
    alertTime: '2012-01-03 01:30',
    alertStatus: '待处理',
    handleEfficiency: '5 h',
    handleTime: '2002-06-18 11:59',
    handledResult: '疾病问题',
    studentName: '文娜',
    building: 'A#7764',
    college: '经济学院'
  },
   {
    asleepRate: '77',
    vacancy: '46',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2005-01-04 11:25',
    alertStatus: '已处理',
    handleEfficiency: '0.6 h',
    handleTime: '1997-02-04 03:18',
    handledResult: '疾病问题',
    studentName: '陈杰',
    building: 'A#3273',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '83',
    vacancy: '79',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2012-02-27 19:44',
    alertStatus: '待处理',
    handleEfficiency: '2 h',
    handleTime: '2001-11-11 22:08',
    handledResult: '疾病问题',
    studentName: '白桂英',
    building: 'A#9973',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '64',
    vacancy: '76',
    bodyTemperature: '35.8',
    alertLevel: '一级',
    alertTime: '2012-01-03 01:30',
    alertStatus: '待处理',
    handleEfficiency: '5 h',
    handleTime: '2002-06-18 11:59',
    handledResult: '疾病问题',
    studentName: '文娜',
    building: 'A#7764',
    college: '经济学院'
  },
   {
    asleepRate: '77',
    vacancy: '46',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2005-01-04 11:25',
    alertStatus: '已处理',
    handleEfficiency: '0.6 h',
    handleTime: '1997-02-04 03:18',
    handledResult: '疾病问题',
    studentName: '陈杰',
    building: 'A#3273',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '83',
    vacancy: '79',
    bodyTemperature: '36',
    alertLevel: '一级',
    alertTime: '2012-02-27 19:44',
    alertStatus: '待处理',
    handleEfficiency: '2 h',
    handleTime: '2001-11-11 22:08',
    handledResult: '疾病问题',
    studentName: '白桂英',
    building: 'A#9973',
    college: '生物医学工程学院'
  },
  {
    asleepRate: '64',
    vacancy: '76',
    bodyTemperature: '35.8',
    alertLevel: '一级',
    alertTime: '2012-01-03 01:30',
    alertStatus: '待处理',
    handleEfficiency: '5 h',
    handleTime: '2002-06-18 11:59',
    handledResult: '疾病问题',
    studentName: '文娜',
    building: 'A#7764',
    college: '经济学院'
  },

];
