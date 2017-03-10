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


    httpApiGet(data: any = {group_id: 0}, context: any) {
        this.httpService.post(API.API_GET, {
            group_id: data.group_id,
        }, {
            success(data){
                context.OnApiGetSuccessListener(data)
            },
            failure(code){
                context.OnApiGetFailureListener(code)
            },
            error(){

            }
        })
    }

    httpApiDetail(data: any = {id: 0}, context: any) {
        this.httpService.post(API.API_DETAIL, {
            id: data.id,
        }, {
            success(data){
                context.OnApiDetailSuccessListener(data)
            },
            failure(code){
                context.OnApiDetailFailureListener(code)
            },
            error(){

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
    }, context: any) {
        this.httpService.post(API.API_CREATE, {
            group_id: data.group_id,
            project_id: data.project_id,
            name: data.name,
            summary: data.summary,
            url: data.url,
            method: data.method

        }, {
            success(data){
                context.OnApiCreateSuccessListener(data)
            },
            failure(code){
                context.OnApiCreateFailureListener(code)

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
        params:'',
        response:'',
        method: 0
    }, context:any) {
        this.httpService.post(API.API_UPDATE, {
            id: data.id,
            group_id: data.group_id,
            name: data.name,
            summary: data.summary,
            url: data.url,
            param:data.params,
            response:data.response,
            method: data.method
        }, {
            success(data){
                context.OnApiUpdateSuccessListener(data)
            },
            failure(code){
                context.OnApiUpdateFailureListener(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpApiDelete(data: any = {id: 0}, context: any) {
        this.httpService.post(API.API_DELETE, {
            id: data.id,
        }, {
            success(data){
                context.OnApiDeleteSuccessListener(data)
            },
            failure(code){
                context.OnApiDeleteFailureListener(code)
            },
            error(){
                console.log()

            }
        })
    }



}

export interface ApiGetListener {
    OnApiGetSuccessListener(data: any): void
    OnApiGetFailureListener(code: any): void
    OnApiGetErrorListener(): void
}

export interface ApiCreateListener {
    OnApiCreateSuccessListener(data: any): void
    OnApiCreateFailureListener(code: any): void
    OnApiCreateErrorListener(): void
}
export interface ApiUpdateListener {
    OnApiUpdateSuccessListener(data: any): void
    OnApiUpdateFailureListener(code: any): void
    OnApiUpdateErrorListener(): void
}

export interface ApiDetailListener {
    OnApiDetailSuccessListener(data: any): void
    OnApiDetailFailureListener(code: any): void
    OnApiDetailErrorListener(): void
}

export interface ApiDeleteListener {
    OnApiDeleteSuccessListener(data: any): void
    OnApiDeleteFailureListener(code: any): void
    OnApiDeleteErrorListener(): void
}