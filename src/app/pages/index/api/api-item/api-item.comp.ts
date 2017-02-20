import {Component, Input} from '@angular/core';
import {ApiEditorService} from "../../../api-editor/api-editor.page.service";
import {AlertService} from "../../../../__module/component/alert/alert.comp.service";
@Component({
    selector: 'api-item',
    templateUrl: './api-item.comp.html',
    styleUrls: ['./api-item.comp.css']
})
export class ApiItemComp {
    @Input() title: string
    @Input() summary: string

    constructor(private apiEditorService: ApiEditorService,
                private alertService: AlertService) {

    }

    OnEditorBtnClick() {
        this.apiEditorService.show()
    }

    OnDeleteBtnClick() {
        this.alertService.show('删除?', '确认删除该API?', {
            OnSureBtnClickListener(){
                console.log('已删除该 api')
            }
        })
    }

}
