import {Component, ViewChild, Renderer, ElementRef, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import {ReportPageService, ReportPageListener} from "./report.page.service";
import {TopNavService} from "../../__module/component/top-nav/top-nav.service";
@Component({
    selector: 'report',
    templateUrl: './report.page.html',
    styleUrls: ['./report.page.css']
})
export class ReportPage extends ReportPageListener implements OnInit {


    OnReportDetailGetSuccess(data: any) {
        this.reportList = data
        this.reportList.splice(0,1)
        this.first=data[0]
        let b_text: any = []
        let look_up_time: any = []
        let connect_time: any = []
        let start_time: any = []
        let pre_time: any = []
        let total_time: any = []
        for (let i = 0; i < this.reportList.length; i++) {
            b_text[i] = '第' + (i + 1) + '次'
            look_up_time[i] = this.reportList[i].lookup_time
            pre_time[i]=this.reportList[i].pre_time
            connect_time[i]=this.reportList[i].connect_time
            start_time[i] = this.reportList[i].start_time
            total_time[i] = this.reportList[i].total_time
        }
        this.option = {

            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['DNS解析','连接','数据准备','数据返回','数据接收时间']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: b_text
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'DNS解析',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: look_up_time
                },
                {
                    name: '连接',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: connect_time
                },
                {
                    name: '数据准备',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: pre_time
                },
                {
                    name: '数据返回',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: start_time
                },
                {
                    name: '数据接受时间',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: total_time
                }
            ]
        }


    }

    option: any = {}

    reportList: any = []
    first:any

    ngOnInit() {


    }


    constructor(private activeRouter: ActivatedRoute,
                private reportPageService: ReportPageService,
                private topNavService: TopNavService) {
        super()
        topNavService.backText='返回Api列表'
        topNavService.title='API测试结果'
        this.topNavService.isShow = true

        this.activeRouter.params
            .subscribe(id => {
                this.reportPageService.init(id['id'], this)
            });

    }

}
