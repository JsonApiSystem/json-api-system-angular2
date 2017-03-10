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
                context.OnProjectGetSuccess(data)
            },
            failure(code){
                context.OnProjectGetFailure(code)
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
                context.OnProjectGetSuccess(data)
            },
            failure(code){
                context.OnProjectGetFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpTestCreate(data = {api_id: 0}, context: any) {
        this.httpService.post(API.TEST_GET, {
            api_id: data.api_id
        }, {
            success(data){
                context.OnProjectGetSuccess(data)
            },
            failure(code){
                context.OnProjectGetFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpTestDelete(data = {api_id: 0}, context: any) {
        this.httpService.post(API.TEST_GET, {
            api_id: data.api_id
        }, {
            success(data){
                context.OnProjectGetSuccess(data)
            },
            failure(code){
                context.OnProjectGetFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

}

export interface TestGetListener {
    OnProjectGetSuccess(data: any): void

    OnProjectGetFailure(code: any): void

    OnProjectGetError(): void
}