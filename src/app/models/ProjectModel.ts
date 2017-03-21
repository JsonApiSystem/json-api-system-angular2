/**
 * NAME : UserModel
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core'
import {MdHttpService} from "../__module/http/MdHttpService";
import {API}from './ApiConfig'
import {Model} from "./Model";
import {UserLocalStorage} from "../utils/UserLocalStorage";
@Injectable()
export class ProjectModel extends Model {
    data: any

    constructor(private httpService: MdHttpService,
                private userLocalStorage: UserLocalStorage) {
        super()
    }

    httpProjectGet(data: any = {user_id: '', page_index: 1, page_size: 999}, context: any, force: boolean = false) {
        var mContext = this.context
        if (!force && this.data) {
            context.OnProjectGetSuccess(this.data)
            return
        }
        console.log('here', this.data)

        this.httpService.post(API.API_PROJECT_GET, {
            user_id: data.user_id,
            page_index: data.page_index,
            page_size: data.page_size,
        }, {
            success(data){
                mContext.data = data
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

    httpProjectCreate(data: any = {name: '', summary: '', icon: '', user_id: 0}, context: any) {
        this.httpService.post(API.API_PROJECT_CREATE, {
            name: data.name,
            summary: data.summary,
            icon: data.icon,
            user_id: this.userLocalStorage.getUserId()
        }, {
            success(data){
                context.OnProjectCreateSuccess(data)
            },
            failure(code){
                context.OnProjectCreateFailure(code)
            },
            error(){

            }
        })
    }

    httpProjectUpdate(data: any = {id: 0, name: '', summary: '', icon: ''}, context: any) {
        this.httpService.post(API.API_PROJECT_UPDATE, {
            name: data.name,
            summary: data.summary,
            icon: data.icon,
            url:data.url,
            id: data.id
        }, {
            success(data){
                context.OnProjectUpdateSuccess(data)
            },
            failure(code){
                context.OnProjectUpdateFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

    httpProjectDelete(data: any = {id: 0}, context: any, index: number) {
        var mContext = this.context
        this.httpService.post(API.API_PROJECT_DELETE, {
            id: data.id,
        }, {
            success(data){
                mContext.data.splice(index, 1)
                context.OnProjectDeleteSuccess(data)
            },
            failure(code){
                context.OnProjectDeleteFailure(code)
            },
            error(){
                console.log()

            }
        })
    }

}

export abstract class ProjectModelListener {
    OnProjectGetSuccess(data: any) {

    }

    OnProjectGetFailure(code: any) {

    }

    OnProjectGetError() {

    }
}

export abstract class ProjectDeleteListener {
    OnProjectDeleteSuccess(data: any) {

    }

    OnProjectDeleteFailure(code: any) {

    }

    OnProjectDeleteError() {

    }
}

export abstract class ProjectCreateListener {
    OnProjectCreateSuccess(data: any) {

    }

    OnProjectCreateFailure(code: any) {

    }

    OnProjectCreateError() {

    }
}

export abstract class ProjectUpdateListener {
    OnProjectUpdateSuccess(data: any) {

    }

    OnProjectUpdateFailure(code: any) {

    }

    OnProjectUpdateError() {

    }
}