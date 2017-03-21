/**
 * NAME : api-editor.page.service
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core';
import {ModalService} from "../../__module/component/modal/modal.comp.service";
import {ProjectMemberModel, ProjectMemberGetListener} from "../../models/ProjectMemberModel";
import {ProjectModel} from "../../models/ProjectModel";
@Injectable()
export class ProjectEditorService extends ModalService {


    constructor(private projectMemberModel: ProjectMemberModel,
                private projectModel: ProjectModel) {
        super()
        // this.data?this.getMember(this.data.id):''
        // this.getMember(this.data.id)
    }

    getMember(project_id: number) {
        this.projectMemberModel.httpProjectMemberGet({
            project_id: project_id
        }, this.context)
    }

    init(context: any) {
        this.context = context
    }

    updateProject(data: any) {
        this.projectModel.httpProjectUpdate(Object.assign({
            id: this.data.id
        }, data), this.context)
    }
}
export class ProjectEditorPageListener implements ProjectMemberGetListener {
    OnProjectMemberGetSuccessListener(data: any): void {
    }

    OnProjectMemberGetFailureListener(code: any): void {
    }

    OnProjectMemberGetErrorListener(): void {
    }

}