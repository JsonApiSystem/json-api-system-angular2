import {Component, OnInit, Input} from '@angular/core';
import {TestTaskListener, TestTaskService} from "./test-task.service";
@Component({
    selector: 'test-task',
    templateUrl: './test-task.comp.html',
    styleUrls: ['./test-task.comp.css']
})
export class TestTaskComp {
    isShow: boolean = false
    data: any = []

    constructor() {

    }

    HandleTestTitleClick() {
        this.isShow = !this.isShow
    }

    setData(data: any) {
        // this.data = data;
        if (data['param'] != null) {
            this.data = JSON.parse(data['param'])
        }
    }
}
