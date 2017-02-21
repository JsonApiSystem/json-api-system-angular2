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
export class ProjectModel {
    constructor(private httpService: MdHttpService) {

    }


    httpProjectGet(data: any = {user_id: '', page_index: 1, page_size: 999}, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            user_id: data.user_id,
            page_index: data.page_index,
            page_size: data.page_size,
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

    httpProjectCreate(data: any = {name: '', summary: '', icon: '', user_id: 0}, success: any, failure: any) {
        this.httpService.post(API.API_USER_LOGIN, {
            name: data.name,
            summary: data.summary,
            icon: data.icon,
            user_id: data.user_id
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

    httpProjectUpdate(data: any = {id: 0, name: '', summary: '', icon: ''}, success: any, failure: any) {
        this.httpService.post(API.API_USER_REGISTER, {
            name: data.name,
            summary: data.summary,
            icon: data.icon,
            id: data.id
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

    httpProjectDelete(data:any={id:0}, success: any, failure: any) {
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