import {Component, Input} from '@angular/core';
import {ProjectEditorPage} from "../../../project-editor/project-editor.page";
import {ProjectEditorService} from "../../../project-editor/project-editor.page.service";
import {AlertService, AlertListener} from "../../../../__module/component/alert/alert.comp.service";
@Component({
    selector: 'project-item',
    templateUrl: './project.comp.html',
    styleUrls: ['./project.comp.css']
})
export class ProjectComp implements AlertListener {
    OnSureBtnClickListener(): void {

    }

    @Input() project: any = {
        name: "",
        summary: ""
    }

    constructor(private projectEditorModelService: ProjectEditorService,
                private alertService: AlertService) {

    }

    HandleOnAlertBtnClick(event: any) {
        event.stopPropagation();
        this.projectEditorModelService.show('修改')

    }

    HandleOnDeleteBtnClick(event: any) {
        event.stopPropagation();
        this.alertService.show('确认删除?', '确认删除该项目?', this)
    }
}

