/**
 * NAME : UserModel
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core'
import {MdHttpService} from "../__module/http/MdHttpService";
import {API}from './ApiConfig'
@Injectable()
export class ReportDetailModel {
    constructor(private httpService: MdHttpService) {

    }

    httpReportDetailGet(data: any = {id:0}, context: any) {
        this.httpService.post(API.TEST_REPORT_DETAIL_GET, {
            id: data.id
        }, {
            success(data){
                context.OnReportDetailGetSuccess(data)
            },
            failure(code){
                context.OnReportDetailGetFailure(code)
            },
            error(){
                console.log()
            }
        })
    }


}

export interface ReportDetailGetListener{
    OnReportDetailGetSuccess(data:any):void;
    OnReportDetailGetFailure(code:any):void;
    OnReportDetailGetError():void;
}

