import {Component, Input} from '@angular/core';
import {ProjectEditorPage} from "../../../project-editor/project-editor.page";
import {ProjectEditorService} from "../../../project-editor/project-editor.page.service";
import {AlertService, AlertListener} from "../../../../__module/component/alert/alert.comp.service";
import {ProjectPageService} from "../project.service";
@Component({
    selector: 'project-item',
    templateUrl: './project.comp.html',
    styleUrls: ['./project.comp.css']
})
export class ProjectComp implements AlertListener {
    OnAlertSureBtnClickListener(data: any): void {
        this.projectPageServer.deleteProject(data)
    }

    @Input() project: any = {
        name: "",
        summary: ""
    }
    @Input() index: number

    constructor(private projectEditorModelService: ProjectEditorService,
                private projectPageServer: ProjectPageService,
                private alertService: AlertService) {

    }

    HandleOnAlertBtnClick(event: any) {
        event.stopPropagation();
        this.projectEditorModelService.show('修改')

    }

    HandleOnDeleteBtnClick(event: any, id: any, index: any) {
        console.log(id)
        event.stopPropagation();
        this.alertService.show('确认删除?', '确认删除该项目?', this, {id: id, index: this.index})
    }
}

