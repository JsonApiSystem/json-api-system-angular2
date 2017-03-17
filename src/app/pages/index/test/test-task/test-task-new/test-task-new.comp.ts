import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {TestTaskNewParamComp} from "./test-task-new-param/test-task-new-param.comp";
import {TestTaskListener, TestTaskService} from "../test-task.service";
import {TestModel} from "../../../../../models/TestModel";
import {InputComp} from "../../../../../__module/component/input/input.comp";
@Component({
    selector: 'test-task-new',
    templateUrl: './test-task-new.comp.html',
    styleUrls: ['./test-task-new.comp.css']
})
export class TestTaskNewComp extends TestTaskListener {
    api: any
    param: any
    @ViewChild('testTaskNewParam') testTaskNewParam: TestTaskNewParamComp
    @ViewChild('nameInput') nameInput: InputComp
    @ViewChild('summaryInput') summaryInput: InputComp
    @ViewChild('timesInput') timesInput: InputComp

    constructor(private testTaskService: TestTaskService) {
        super()
    }

    setData(data: any) {
        this.api = data
        this.param = JSON.parse(data['param']);
        this.testTaskNewParam.setData(this.param)
    }

    OnTestCreateSuccess(data: any) {

    }

    OnTestCreateFailure(code: any) {

    }

    HandleTestAddSureBtnClick() {
        // console.log(this.testTaskNewParam.getData())
        this.testTaskService.createTest({
            api_id: this.api['id'],
            params: JSON.stringify(this.testTaskNewParam.getData()),
            name: this.nameInput.getValue(),
            summary: this.summaryInput.getValue(),
            times: this.timesInput.getValue()
        }, this,)
    }

    HandleTestAddCancelBtnClick() {

    }
}
