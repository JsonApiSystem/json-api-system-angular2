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
export class TestReportModel {
    constructor(private httpService: MdHttpService) {

    }

    httpTestReportGet(data = {test_id: 0}, context: any) {
        this.httpService.post(API.TEST_REPORT_GET, {
            test_id: data.test_id
        }, {
            success(data){
                context.OnTestReportGetSuccess(data)
            },
            failure(code){
                context.OnTestReportGetFailure(code)
            },
            error(){
                console.log()
            }
        })
    }

}

export interface TestReportGetListener{
    OnTestReportGetSuccess(data:any):void
    OnTestReportGetFailure(data:any):void
    OnTestReportGetError(data:any):void

}