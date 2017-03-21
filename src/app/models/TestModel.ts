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
export class TestModel {
    constructor(private httpService: MdHttpService) {

    }

    httpTestGet(data = {api_id: 0}, context: any) {
        this.httpService.post(API.TEST_GET, {
            api_id: data.api_id
        }, {
            success(data){
                context.OnTestGetSuccess(data)
            },
            failure(code){
                context.OnTestGetFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpTestUpdate(data = {api_id: 0}, context: any) {
        this.httpService.post(API.TEST_GET, {
            api_id: data.api_id
        }, {
            success(data){
                context.OnTestGetSuccess(data)
            },
            failure(code){
                context.OnTestGetFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpTestCreate(data = {api_id: 0, times: 0, name: '', summary: '', params: ''}, context: any) {
        this.httpService.post(API.TEST_CREATE, {
            api_id: data.api_id,
            times: data.times,
            name: data.name,
            summary: data.summary,
            params: data.params
        }, {
            success(data){
                context.OnTestCreateSuccess(data)
            },
            failure(code){
                context.OnTestCreateFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpTestDelete(data = {id: 0}, context: any) {
        this.httpService.post(API.TEST_DELETE, {
            id: data.id
        }, {
            success(data){
                context.OnTestDeleteSuccess(data)
            },
            failure(code){
                context.OnTestDeleteFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpTestRun(data={id:0}){
        this.httpService.post(API.TEST_RUN, {
            id: data.id
        }, {
            success(data){
            },
            failure(code){
            },
            error(){
                console.log()

            }
        })
    }

}

export interface TestGetListener {
    OnTestGetSuccess(data: any): void

    OnTestGetFailure(code: any): void

    OnTestGetError(): void
}
export interface TestCreateListener {
    OnTestCreateSuccess(data: any): void

    OnTestCreateFailure(code: any): void

    OnTestCreateError(): void
}
export interface TestUpdateListener {
    OnTestUpdateSuccess(data: any): void

    OnTestUpdateFailure(code: any): void

    OnTestUpdateError(): void
}
export interface TestDeleteListener {
    OnTestDeleteSuccess(data: any): void

    OnTestDeleteFailure(code: any): void

    OnTestDeleteError(): void
}