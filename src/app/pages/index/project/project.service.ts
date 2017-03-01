/**
 * NAME : project.service
 * USER : FollowWinter
 * DATE : 27/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {ProjectModelListener, ProjectModel} from "../../../models/ProjectModel";
import {AppPageService} from "../../app.page.service";
import {UserLocalStorage} from "../../../utils/UserLocalStorage";
@Injectable()
export class ProjectPageService extends AppPageService {


    constructor(private projectModel: ProjectModel,
                private userLocalStorage: UserLocalStorage) {
        super();
    }

    getProject() {
        this.projectModel.httpProjectGet(
            {user_id: this.userLocalStorage.getUserId(), page_index: 1, page_size: 999}
            , this.context)
    }


}

export class ProjectPageListener implements ProjectModelListener {
    OnProjectGetSuccess(data: any) {

    }

    OnProjectGetFailure(code: any) {
    }

    OnProjectGetError() {
    }


}