import {Component, Output, OnInit, Input, EventEmitter} from '@angular/core';
import {TestPageService, TestPageListener} from "../../test.page.service";
import {TestResultService} from "../../test-result/test-result.service";
import {SmallToastService} from "../../../../../__module/component/toast/small-toast.service";
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
        this.toast.showToast('删除成功')
        this.OutputTestDeleteSuccess.emit()
    }

    OnTestDeleteFailure(data: any) {
        console.log('success')
    }


    @Output() OutputTestTitleClick = new EventEmitter<any>();
    @Output() OutputTestDeleteSuccess = new EventEmitter<any>();

    constructor(private testPageService: TestPageService,
                private testReportService: TestResultService,
                private toast: SmallToastService) {
        super()
    }

    HandleRunBtnClick(taskId: any) {
        this.testPageService.runTest(taskId)
        this.toast.showToast('运行测试组成功，等待返回')
    }

    HandleTestTitleClick(id: any) {
        this.isShow = !this.isShow
        this.testReportService.getReport(id)
        // this.OutputTestTitleClick.emit(id)
    }

    HandleSaveBtnClick() {

    }


    HandleDeleteBtnClick() {
        this.testPageService.deleteTest(this.task['id'], this)
    }
}
