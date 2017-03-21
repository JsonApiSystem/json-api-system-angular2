import {Component, ViewChild} from '@angular/core';
import {ProjectEditorService, ProjectEditorPageListener} from "./project-editor.page.service";
import {InputComp} from "../../__module/component/input/input.comp";
@Component({
    selector: 'project-editor-page',
    templateUrl: './project-editor.page.html',
    styleUrls: ['./project-editor.page.css']
})
export class ProjectEditorPage extends ProjectEditorPageListener {
    OnProjectMemberGetSuccessListener(data: any) {
        this.memberList = data
    }

    memberList: any = []
    @ViewChild('nameInput') nameInput: InputComp
    @ViewChild('summaryInput') summaryInput: InputComp
    @ViewChild('urlInput') urlInput: InputComp

    constructor(private projectEditorService: ProjectEditorService,) {
        super()
        this.projectEditorService.init(this)
    }


    HandleSaveBtnClick() {
        this.projectEditorService.updateProject({
            name: this.nameInput.getValue(),
            summary: this.summaryInput.getValue(),
            url: this.urlInput.getValue()
        })
    }

    HandleCancelBtnClick() {
        this.projectEditorService.hide()
    }
}
