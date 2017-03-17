import {Component, OnInit, Input} from '@angular/core';
import {TestPageService, TestPageListener} from "../../test.page.service";
import {TestResultService} from "../../test-result/test-result.service";
@Component({
    selector: 'test-task-item',
    templateUrl: './test-task-item.comp.html',
    styleUrls: ['./test-task-item.comp.css']
})
export class TestTaskItemComp extends TestPageListener {
    isShow: boolean = false
    @Input() task: any


    OnTestUpdateSuccess(data: any) {
    }

    OnTestUpdateFailure(code: any) {
    }

    OnTestDeleteSuccess(data: any) {
        console.log('success')
    }

    OnTestDeleteFailure(data: any) {
        console.log('success')
    }

    constructor(private testPageService: TestPageService,
                private testReportService: TestResultService) {
        super()
    }

    HandleRunBtnClick(taskId: any) {
        this.testPageService.runTest(taskId)
    }

    HandleTestTitleClick(id: any) {
        this.isShow = !this.isShow
        this.testReportService.getReport(id)

    }

    HandleSaveBtnClick() {

    }

    HandleDeleteBtnClick() {
        this.testPageService.deleteTest(this.task['id'], this)
    }
}
