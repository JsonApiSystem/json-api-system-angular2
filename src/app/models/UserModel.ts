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

    static USER_LOGIN_PASSWORD_USERNAME_ERROR = 201
    userInfo: any

    httpUserLogin(data: any = {email: '', pwd: ''}, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            email: undefined,
            pwd: data.pwd
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

    httpUserRegister(data: any = {email: '', pwd: ''}, success: any, failure: any) {
        this.httpService.post(API.API_USER_REGISTER, {
            email: data.email,
            pwd: data.pwd
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