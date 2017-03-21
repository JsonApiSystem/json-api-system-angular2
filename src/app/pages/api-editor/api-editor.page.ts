import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {ApiEditorService, ApiEditorListener} from "./api-editor.page.service";
import {InputComp} from "../../__module/component/input/input.comp";
import {ApiParamComp} from "./api-param/api-param.com";
import {ApiResponseComp} from "./api-response/api-response.com";
@Component({
    selector: 'api-editor-page',
    templateUrl: './api-editor.page.html',
    styleUrls: ['./api-editor.page.css']
})
export class ApiEditorPage extends ApiEditorListener {
    constructor(private apiEditorService: ApiEditorService) {
        super()
    }

    @ViewChild('nameInput') nameInput: InputComp
    @ViewChild('summaryInput') summaryInput: InputComp
    @ViewChild('methodInput') methodInput: InputComp
    @ViewChild('urlInput') urlInput: InputComp
    @ViewChild('paramInput') paramInput: ApiParamComp
    @ViewChild('responseInput') responseInput: ApiResponseComp

    OnApiUpdateSuccessListener(data: any) {
        this.apiEditorService.hide()
    }

    OnApiUpdateFailureListener(code: any) {
        this.apiEditorService.hide()
    }


    HandleSaveBtnClick() {
        // console.log(this.apiParam.getParam())
        // console.log(this.apiParam.getParam())
        // this.nameInput.map(item => {
        //     console.log(item)
        // })
        // console.log(this.apiParam.getParam())
        this.apiEditorService.save(this,{
            name:this.nameInput.getValue(),
            summary:this.summaryInput.getValue(),
            method:this.methodInput.getValue(),
            url:this.urlInput.getValue(),
            params:this.paramInput.getParam(),
            response:this.responseInput.getResponse()
        })
    }

    HandleCancelBtnClick() {
        this.apiEditorService.hide()
    }

    HandleParamAddBtnClick() {
        this.apiEditorService.addParam()
    }

    HandleParamDeleteBtnClick(index: number) {
        this.apiEditorService.deleteParam(index)
    }

    HandleResponseAddBtnClick() {
        this.apiEditorService.addResponse()
    }

    HandleResponseDeleteBtnClick(index: number) {
        this.apiEditorService.deleteResponse(index)
    }

}
