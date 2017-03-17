/**
 * NAME : test.page.service
 * USER : FollowWinter
 * DATE : 28/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {
    ApiGetListener, ApiModel, ApiDetailListener, ApiUpdateListener,
    ApiDeleteListener
} from "../../../models/ApiModel";
import {AppPage} from "../../app.page";
import {AppPageService} from "../../app.page.service";
import {TestUpdateListener, TestDeleteListener, TestModel} from "../../../models/TestModel";
@Injectable()
export class TestPageService extends AppPageService {
    group: any

    constructor(private apiModel: ApiModel,
                private testModel: TestModel) {
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


    deleteTest(id: any, context: any) {
        this.testModel.httpTestDelete({
            id: id
        }, context)
    }

    runTest(taskId: any) {
        this.testModel.httpTestRun({
            id:taskId
        })
    }
}
export class TestPageListener implements ApiGetListener,ApiDetailListener,TestUpdateListener,TestDeleteListener {
    OnTestUpdateSuccess(data: any): void {
    }

    OnTestUpdateFailure(code: any): void {
    }

    OnTestUpdateError(): void {
    }

    OnTestCreateSuccess(data: any): void {
    }

    OnTestCreateFailure(code: any): void {
    }

    OnTestCreateError(): void {
    }

    OnTestDeleteSuccess(data: any): void {
    }

    OnTestDeleteFailure(code: any): void {
    }

    OnTestDeleteError(): void {
    }


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
