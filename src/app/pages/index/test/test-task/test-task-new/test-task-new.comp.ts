import {Component, OnInit, Input} from '@angular/core';
@Component({
    selector: 'test-task-new',
    templateUrl: './test-task-new.comp.html',
    styleUrls: ['./test-task-new.comp.css']
})
export class TestTaskNewComp {
    api: any
    param: any

    setData(data: any) {
        this.api = data
        this.param = JSON.parse(data['param']);
    }
}
