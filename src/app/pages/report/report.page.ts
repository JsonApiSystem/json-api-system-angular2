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
        let b_text: any = []
        let look_up_time: any = []
        let start_time: any = []
        let total_time: any = []
        for (let i = 0; i < this.reportList.length; i++) {
            b_text[i] = '第' + (i + 1) + '次'
            look_up_time[i] = this.reportList[i].lookup_time
            start_time[i] = this.reportList[i].start_time
            total_time[i] = this.reportList[i].total_time
        }
        console.log(b_text, look_up_time, total_time)

        this.option = {
            title: {
                text: 'api数据时间图像'
            },
            tooltip: {
                trigger: 'axis'
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
                    name: '解析时间',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: look_up_time
                },
                {
                    name: '连接时间',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: start_time
                },
                {
                    name: '总时间',
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
