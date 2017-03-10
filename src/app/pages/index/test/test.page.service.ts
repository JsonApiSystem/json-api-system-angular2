/**
 * NAME : test.page.service
 * USER : FollowWinter
 * DATE : 28/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {ApiGetListener, ApiModel, ApiDetailListener} from "../../../models/ApiModel";
import {AppPage} from "../../app.page";
import {AppPageService} from "../../app.page.service";
@Injectable()
export class TestPageService extends AppPageService {
    group: any

    constructor(private apiModel: ApiModel) {
        super()
    }

    init(context: any, group_id: any) {
        this.context = context
        this.apiModel.httpApiGet({
            group_id: group_id
        }, this.context)
    }


    getApiDetail(id: any) {
        this.apiModel.httpApiDetail({id: id}, this.context);
    }
}
export class TestPageListener implements ApiGetListener,ApiDetailListener {
    OnApiDetailSuccessListener(data: any): void {

    }

    OnApiDetailFailureListener(code: any): void {
    }

    OnApiDetailErrorListener(): void {
    }

    OnApiGetSuccessListener(data: any): void {
    }

    OnApiGetFailureListener(code: any): void {
    }

    OnApiGetErrorListener(): void {
    }

}
