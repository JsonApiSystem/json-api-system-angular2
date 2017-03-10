import {Component, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ApiEditorService} from "../../../api-editor/api-editor.page.service";
import {AlertService} from "../../../../__module/component/alert/alert.comp.service";
import {ApiCreateListener, ApiModel} from "../../../../models/ApiModel";
import {MdButton} from "@angular/material";
import {InputComp} from "../../../../__module/component/input/input.comp";
import {ProjectPageService} from "../../project/project.service";
import {ApiGroupService} from "../api-group/api-group.service";
import {ButtonComp} from "../../../../__module/component/button/button.comp";
@Component({
    selector: 'api-new',
    templateUrl: './api-new.comp.html',
    styleUrls: ['./api-new.comp.css']
})
export class ApiNewComp implements OnInit,ApiCreateListener {
    OnApiCreateSuccessListener(data: any): void {
        this.sureBtn.toggleLoading()
        this.hide()
        this.OnApiCreateSuccess.emit()

    }

    OnApiCreateFailureListener(code: any): void {

    }

    OnApiCreateErrorListener(): void {
    }

    ngOnInit(): void {

    }

    @ViewChild('nameInput') nameInput: InputComp
    @ViewChild('summaryInput') summaryInput: InputComp
    @ViewChild('sureBtn') sureBtn: ButtonComp

    @Input() projectId: any
    @Input() groupId: any
    @Output() OnApiCreateSuccess = new EventEmitter();

    isShow: boolean = false

    constructor(private apiEditorService: ApiEditorService,
                private alertService: AlertService,
                private apiModel: ApiModel,
                private groupService:ApiGroupService) {

    }

    show() {
        this.isShow = true
        console.log(this.projectId, this.groupId)
    }

    hide() {
        this.isShow = false
    }

    HandleSureBtnClick() {
        this.sureBtn.toggleLoading()
        this.apiModel.httpApiCreate({
            group_id: this.groupId,
            project_id: this.projectId,
            name: this.nameInput.getValue(),
            summary: this.summaryInput.getValue(),
        }, this)
    }

    HandleCancelBtnClick() {
        this.hide()
    }

}
