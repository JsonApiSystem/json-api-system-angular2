import {Component, ViewChild, Renderer, ElementRef, OnInit,Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'report-item',
    templateUrl: './report-item.com.html',
    styleUrls: ['./report-item.com.css']
})
export class ReportItemComp implements OnInit{

    @Input()report:any
    @Input()index:any
    option:any
    isShow:boolean=false

    ngOnInit(){
        this.option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:this.report.lookup_time, name:'DNS解析时间'+this.report.lookup_time},
                        {value:this.report.connect_time,name:'连接时间'+(this.report.connect_time)},
                        {value:this.report.pre_time, name:'数据发送和拼装时间'+(this.report.pre_time)},
                        {value:this.report.start_time, name:'返回时间'+(this.report.start_time)},
                        {value:this.report.total_time, name:'数据接受时间'+(this.report.total_time)},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
    constructor() {

    }
    HandleTitleClick(){
        this.isShow=!this.isShow
    }
}
