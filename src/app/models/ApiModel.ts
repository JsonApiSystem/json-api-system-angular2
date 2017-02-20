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
export class UserModel {
    constructor(private httpService: MdHttpService) {

    }


    httpApiGet(email: string, pwd: string, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            email: email,
            pwd: pwd
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

    httpApiCreate(email: string, pwd: string, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            email: email,
            pwd: pwd
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

    httpApiUpdate(email: string, pwd: string, success: any, failure: any) {
        this.httpService.post(API.API_USER_REGISTER, {
            email: email,
            pwd: pwd
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

    httpApiDelete(email: string, pwd: string, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            email: email,
            pwd: pwd
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