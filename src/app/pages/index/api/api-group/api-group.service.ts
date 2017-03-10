import {ApiGetListener, ApiModel} from "../../../../models/ApiModel";
import {AppPageService} from "../../../app.page.service";
import {Injectable} from "@angular/core";
/**
 * NAME : api-group.service
 * USER : FollowWinter
 * DATE : 28/02/2017
 * SUMMARY :
 */
@Injectable()
export class ApiGroupService extends AppPageService {
    constructor(private apiModel: ApiModel) {
        super()
    }

    init(context: any, group_id: any) {
        this.setContext(context)
        this.apiModel.httpApiGet({
            group_id: group_id
        }, this.context)

    }


}


export class ApiGroupComListener implements ApiGetListener {
    OnApiGetSuccessListener(data: any): void {

    }

    OnApiGetFailureListener(code: any): void {
    }

    OnApiGetErrorListener(): void {
    }

}