/**
 * NAME : project.service
 * USER : FollowWinter
 * DATE : 27/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {
    ProjectModelListener, ProjectModel, ProjectDeleteListener,
    ProjectCreateListener
} from "../../../models/ProjectModel";
import {AppPageService} from "../../app.page.service";
import {UserLocalStorage} from "../../../utils/UserLocalStorage";
@Injectable()
export class ProjectPageService extends AppPageService {


    constructor(private projectModel: ProjectModel,
                private userLocalStorage: UserLocalStorage) {
        super();
    }

    init(context: any,force:boolean=false) {
        this.context = context
        this.projectModel.httpProjectGet(
            {user_id: this.userLocalStorage.getUserId(), page_index: 1, page_size: 999}
            , this.context,force)
    }

    deleteProject(data: any) {
        this.projectModel.httpProjectDelete({
            id: data.id
        }, this.context, data.index)
    }

    createProject(data: any) {
        this.projectModel.httpProjectCreate(data,this.context)
    }
}

export class ProjectPageListener implements ProjectModelListener,ProjectDeleteListener,ProjectCreateListener {
    OnProjectCreateSuccess(data: any) {
    }

    OnProjectCreateFailure(code: any) {
    }

    OnProjectCreateError() {
    }
    OnProjectDeleteSuccess(data: any) {
    }

    OnProjectDeleteFailure(code: any) {
    }

    OnProjectDeleteError() {
    }

    OnProjectGetSuccess(data: any) {

    }

    OnProjectGetFailure(code: any) {
    }

    OnProjectGetError() {
    }


}