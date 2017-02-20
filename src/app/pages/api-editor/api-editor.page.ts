import {Component} from '@angular/core';
import {ApiEditorService} from "./api-editor.page.service";
@Component({
    selector: 'api-editor-page',
    templateUrl: './api-editor.page.html',
    styleUrls: ['./api-editor.page.css']
})
export class ApiEditorPage {
    constructor(private apiEditorService:ApiEditorService){

    }
    OnSaveBtnClick() {

    }

    OnCancelBtnClick() {
        this.apiEditorService.hide()
    }
}
