/**
 * NAME : test.page.service
 * USER : FollowWinter
 * DATE : 28/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {AppPageService} from "../../../app.page.service";
import {TestReportModel, TestReportGetListener} from "../../../../models/TestReportModel";
@Injectable()
export class TestResultService extends AppPageService implements TestReportGetListener {
    OnTestReportGetSuccess(data: any): void {
        this.data = data
    }

    OnTestReportGetFailure(data: any): void {
    }

    OnTestReportGetError(data: any): void {
    }

    data: any = []

    constructor(private testReportModel: TestReportModel) {
        super()
    }


    getReport(id: any) {
        this.testReportModel.httpTestReportGet({
            test_id: id
        }, this)
    }
}

