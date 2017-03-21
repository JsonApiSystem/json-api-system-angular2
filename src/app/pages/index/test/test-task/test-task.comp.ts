import {Component, ViewChild,OnInit, Input} from '@angular/core';
import {TestTaskListener, TestTaskService} from "./test-task.service";
import {TestResultService} from "../test-result/test-result.service";
import {TestTaskNewComp} from "./test-task-new/test-task-new.comp";
@Component({
    selector: 'test-task',
    templateUrl: './test-task.comp.html',
    styleUrls: ['./test-task.comp.css']
})
export class TestTaskComp extends TestTaskListener {
    isShow: boolean = false
    data: any = []
    testList: any = []


    constructor(private testTaskService: TestTaskService,
                private testResultService: TestResultService) {
        super()
    }
    @ViewChild('testTaskNew') testTaskNew: TestTaskNewComp

    OnTestGetSuccess(data: any) {

        for (let i = 0; i < data.length; i++) {
            if (data[i]['params'] != null && data[i]['params'] != '') {
                data[i]['params'] = JSON.parse(data[i]['params'])
            }
        }
        this.testList = data

    }

    OnTestGetFailure(code: any) {

    }

    HandleTestTitleClick(id:any) {
        this.isShow = !this.isShow
    }


    setData(data: any) {
        this.data=data
        this.testTaskNew.setData(data)
        if (data['param'] != null) {
            this.data['param'] = JSON.parse(data['param'])
        }
        this.testTaskService.getTest(data.id, this)
    }
    HandleTestDeleteSuccess(){
        this.testTaskService.getTest(this.data.id, this)
    }
    HandleTestCreateSuccess(){
        this.testTaskService.getTest(this.data.id, this)

    }
}
