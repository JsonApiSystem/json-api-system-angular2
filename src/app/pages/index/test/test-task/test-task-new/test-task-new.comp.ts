import {Component, OnInit,Output, Input, ViewChild,EventEmitter} from '@angular/core';
import {TestTaskNewParamComp} from "./test-task-new-param/test-task-new-param.comp";
import {TestTaskListener, TestTaskService} from "../test-task.service";
import {InputComp} from "../../../../../__module/component/input/input.comp";
import {SmallToastService} from "../../../../../__module/component/toast/small-toast.service";
@Component({
    selector: 'test-task-new',
    templateUrl: './test-task-new.comp.html',
    styleUrls: ['./test-task-new.comp.css']
})
export class TestTaskNewComp extends TestTaskListener {
    isShow:any=false
    api: any
    param: any
    @ViewChild('testTaskNewParam') testTaskNewParam: TestTaskNewParamComp
    @ViewChild('nameInput') nameInput: InputComp
    @ViewChild('summaryInput') summaryInput: InputComp
    @ViewChild('timesInput') timesInput: InputComp
    @Output() OutputTestCreateSuccess = new EventEmitter<any>();


    constructor(private testTaskService: TestTaskService,
    private toast:SmallToastService) {
        super()

    }

    setData(data: any) {
        this.api = data
        this.param = JSON.parse(data['param']);
        this.testTaskNewParam.setData(this.param)

    }

    OnTestCreateSuccess(data: any) {
        this.nameInput.setValue(' ')
        this.summaryInput.setValue(' ')
        this.timesInput.setValue(' ')
        this.testTaskNewParam.setData(this.param)
        this.toast.showToast('创建成功')
        this.OutputTestCreateSuccess.emit();

    }

    OnTestCreateFailure(code: any) {

    }

    HandleTestAddSureBtnClick() {
        // this.OutputTestCreateSuccess.emit('');
        // return
        this.testTaskService.createTest({
            api_id: this.api['id'],
            params: JSON.stringify(this.testTaskNewParam.getData()),
            name: this.nameInput.getValue(),
            summary: this.summaryInput.getValue(),
            times: this.timesInput.getValue()
        }, this)
    }


}
