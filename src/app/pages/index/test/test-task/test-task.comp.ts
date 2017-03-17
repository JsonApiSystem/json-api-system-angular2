import {Component, OnInit, Input} from '@angular/core';
import {TestTaskListener, TestTaskService} from "./test-task.service";
import {TestResultService} from "../test-result/test-result.service";
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

    OnTestGetSuccess(data: any) {
        console.log('before', data)

        for (let i = 0; i < data.length; i++) {
            if (data[i]['params'] != null && data[i]['params'] != '') {
                data[i]['params'] = JSON.parse(data[i]['params'])
            }
        }
        console.log('transfer', data)
        this.testList = data
    }

    OnTestGetFailure(code: any) {

    }

    HandleTestTitleClick(id:any) {
        this.isShow = !this.isShow
    }


    setData(data: any) {
        if (data['param'] != null) {
            this.data = JSON.parse(data['param'])
        }
        this.testTaskService.getTest(data.id, this)
    }
}
