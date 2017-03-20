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
@Injectable()
export class ApiGroupModel extends Model {
    data: any=[]

    constructor(private httpService: MdHttpService) {
        super()
    }

    setData(projectId: number, data: any) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]['project_id'] == projectId) {
                this.data[i]['groups'] = data
                return
            }
        }
        this.data[this.data.length] = {
            project_id: projectId,
            group: data
        }
    }
    getData(project_id:number){
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]['project_id'] == project_id) {
                return this.data[i]['groups']
            }
        }
        return null
    }


    httpApiGroupGet(data: any = {project_id: 0}, context: any,force:boolean=false) {
        if (!force){
            let tem=this.getData(data.project_id)
            if (tem!=null){
                return tem
            }
        }
        var mContext: any
        this.httpService.post(API.API_GROUP_GET, {
            project_id: data.project_id,
        }, {
            success(data){
                // mContext.setData(data.project_id,data)

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


    httpApiGroupCreate(data: any = {project_id: 0, name: '', summary: '', icon: ''}, context:any) {
        this.httpService.post(API.API_GROUP_CREATE, {
            project_id: data.project_id,
            name: data.name,
            summary: data.summary,
            icon: data.icon
        }, {
            success(data){
                context.OnApiGroupCreateSuccessListener(data)
            },
            failure(code){
                context.OnApiGroupCreateFailureListener(code)
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

    httpApiGroupDelete(data: any = {id: 0},context:any) {
        this.httpService.post(API.API_GROUP_DELETE, {
            id: data.id,
        }, {
            success(data){
               context.OnApiGroupDeleteSuccessListener(data)
            },
            failure(code){
                context.OnApiGroupDeleteFailureListener(code)
            },
            error(){

            }
        })
    }

}

export interface ApiGroupGetListener {
    OnApiGroupGetSuccessListener(data: any): void
    OnApiGroupGetFailureListener(code: any): void
    OnApiGroupGetErrorListener(): void
}

export interface ApiGroupCreateListener {
    OnApiGroupCreateSuccessListener(data: any): void
    OnApiGroupCreateFailureListener(code: any): void
    OnApiGroupCreateErrorListener(): void
}

export interface ApiGroupDeleteListener {
    OnApiGroupDeleteSuccessListener(data: any): void
    OnApiGroupDeleteFailureListener(code: any): void
    OnApiGroupDeleteErrorListener(): void
}