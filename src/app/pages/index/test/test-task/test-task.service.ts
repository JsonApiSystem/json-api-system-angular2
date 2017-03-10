import {Component, OnInit, Input} from '@angular/core';
import {ApiGetListener} from "../../../../models/ApiModel";
@Component({
    selector: 'test-task',
    templateUrl: './test-task.comp.html',
    styleUrls: ['./test-task.comp.css']
})
export class TestTaskService {


    @Input() api:any

    constructor() {

    }

}
export class TestTaskListener implements ApiGetListener{
    OnApiGetSuccessListener(data: any): void {

    }

    OnApiGetFailureListener(code: any): void {
    }

    OnApiGetErrorListener(): void {
    }

}
