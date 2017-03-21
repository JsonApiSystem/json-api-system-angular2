/**
 * NAME : login.page.service
 * USER : FollowWinter
 * DATE : 21/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {AppPageService} from "../app.page.service";
import {ReportDetailModel, ReportDetailGetListener} from "../../models/ReporDetailtModel";
@Injectable()
export class ReportPageService extends AppPageService {
    constructor(private reportDetailModel: ReportDetailModel) {
        super()
    }

    init(id: number, context: any) {
        this.reportDetailModel.httpReportDetailGet({
            id: id
        }, context)
    }
}
export class ReportPageListener implements ReportDetailGetListener{
    OnReportDetailGetSuccess(data:any){

    }
    OnReportDetailGetFailure(code:any){

    }
    OnReportDetailGetError(){

    }

}