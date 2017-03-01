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
export class ApiGroupModel {
    constructor(private httpService: MdHttpService) {

    }


    httpApiGroupGet(data: any = {project_id: 0}, context:any) {
        this.httpService.post(API.API_GROUP_GET, {
            project_id: data.project_id,
        }, {
            success(data){
                context.OnApiGroupGetSuccessListener(data)
            },
            failure(code){
               context.OnApiGroupGetFailureListener(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpApiGroupCreate(data: any = {project_id: 0, name: '', summary: '', icon: ''}, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            project_id: data.project_id,
            name: data.name,
            summary: data.summary,
            icon: data.icon
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

    httpApiGroupUpdate(data: any = {id: 0, name: '', summary: '', icon: ''}, success: any, failure: any) {
        this.httpService.post(API.API_USER_REGISTER, {
            id: data.id,
            name: data.name,
            summary: data.summary,
            icon: data.icon
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

    httpApiGroupDelete(data: any = {id: 0}, success: any, failure: any) {
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

export interface ApiGroupGetListener {
    OnApiGroupGetSuccessListener(data:any): void
    OnApiGroupGetFailureListener(code:any): void
    OnApiGroupGetErrorListener(): void
}