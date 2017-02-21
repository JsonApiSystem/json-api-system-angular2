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
export class ApiModel {
    constructor(private httpService: MdHttpService) {

    }


    httpApiGet(data: any = {group_id: 0}, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            group_id: data.group_id,
        }, {
            success(data){
                success()
                console.log(data)
            },
            failure(code){
                console.log(code)
                failure();
            },
            error(){
                console.log()

            }
        })
    }

    httpApiCreate(data: any = {
        group_id: 0,
        project_id: 0,
        name: '',
        summary: '',
        url: '',
        method: 0
    }, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            group_id: data.group_id,
            project_id: data.project_id,
            name: data.name,
            summary: data.summary,
            url: data.url,
            method: data.method

        }, {
            success(data){
                success()
                console.log(data)
            },
            failure(code){
                console.log(code)
                failure();
            },
            error(){
                console.log()

            }
        })
    }

    httpApiUpdate(data: any = {
        id: 0,
        group_id: 0,
        project_id: 0,
        name: '',
        summary: '',
        url: '',
        method: 0
    }, success: any, failure: any) {
        this.httpService.post(API.API_USER_REGISTER, {
            id: data.id,
            group_id: data.group_id,
            name: data.name,
            summary: data.summary,
            url: data.url,
            method: data.method
        }, {
            success(data){
                success()
                console.log(data)
            },
            failure(code){
                console.log(code)
                failure();
            },
            error(){
                console.log()

            }
        })
    }

    httpApiDelete(data: any = {id: 0}, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            id: data.id,
        }, {
            success(data){
                success()
                console.log(data)
            },
            failure(code){
                console.log(code)
                failure();
            },
            error(){
                console.log()

            }
        })
    }

}