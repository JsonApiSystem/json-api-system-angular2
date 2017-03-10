import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ApiEditorService} from "../../../api-editor/api-editor.page.service";
import {AlertService, AlertListener} from "../../../../__module/component/alert/alert.comp.service";
import {ApiCreateListener, ApiDeleteListener, ApiModel} from "../../../../models/ApiModel";
@Component({
    selector: 'api-item',
    templateUrl: './api-item.comp.html',
    styleUrls: ['./api-item.comp.css']
})
export class ApiItemComp implements OnInit, AlertListener,ApiDeleteListener {
    OnApiDeleteSuccessListener(data: any): void {
        this.OnApiDeleteSuccess.emit()
    }

    OnApiDeleteFailureListener(code: any): void {
    }

    OnApiDeleteErrorListener(): void {
    }

    OnAlertSureBtnClickListener(): void {
        this.apiModel.httpApiDelete({
            id: this.api.id
        }, this)
    }

    ngOnInit(): void {
        console.log('api', this.api)
    }

    @Input() api: any
    @Output() OnApiDeleteSuccess = new EventEmitter();

    constructor(private apiEditorService: ApiEditorService,
                private alertService: AlertService,
                private apiModel: ApiModel) {

    }


    HandleEditorBtnClick() {
        this.apiEditorService.show(this.api.id)
    }

    HandleDeleteBtnClick() {
        this.alertService.show('确认删除', '确认删除该 api?', this)
    }

}
