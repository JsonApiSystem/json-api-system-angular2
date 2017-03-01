import {Component, Input, OnInit} from '@angular/core';
import {ApiEditorService} from "../../../api-editor/api-editor.page.service";
import {AlertService} from "../../../../__module/component/alert/alert.comp.service";
@Component({
    selector: 'api-item',
    templateUrl: './api-item.comp.html',
    styleUrls: ['./api-item.comp.css']
})
export class ApiItemComp implements OnInit {
    ngOnInit(): void {
        console.log('api', this.api)
    }

    @Input() api: any

    constructor(private apiEditorService: ApiEditorService,
                private alertService: AlertService) {

    }


    HandleEditorBtnClick() {

    }

    HandleDeleteBtnClick() {

    }

}
