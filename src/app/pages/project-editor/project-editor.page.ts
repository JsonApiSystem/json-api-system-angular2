import {Component} from '@angular/core';
import {ProjectEditorService} from "./project-editor.page.service";
@Component({
    selector: 'project-editor-page',
    templateUrl: './project-editor.page.html',
    styleUrls: ['./project-editor.page.css']
})
export class ProjectEditorPage {
    constructor(private projectEditorService: ProjectEditorService) {

    }

    OnSaveBtnClick() {
        console.log('保存')
    }

    OnCancelBtnClick() {
        this.projectEditorService.hide()
    }
}
