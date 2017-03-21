/**
 * NAME : UserModel
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core'
import {Model} from "./Model";
import {MdHttpService} from "../__module/http/MdHttpService";
import {API} from "./ApiConfig";
@Injectable()
export class ProjectMemberModel extends Model {

    constructor(private httpService: MdHttpService,) {
        super()
    }

    httpProjectMemberGet(data = {project_id: 0}, context: any) {
        this.httpService.post(API.API_PROJECT_MEMBER_GET, {
            project_id: data.project_id,
        }, {
            success(data){
                context.OnProjectMemberGetSuccessListener(data)
            },
            failure(code){
                context.OnProjectMemberGetFailureListener(code)
            },
            error(){
                console.log()
            }
        })
    }

    httpProjectMemberUpdate(data = {project_id: 0}, context: any) {
        this.httpService.post(API.API_PROJECT_MEMBER_GET, {
            project_id: data.project_id,
        }, {
            success(data){
                context.OnProjectMemberGetSuccessListener(data)
            },
            failure(code){
                context.OnProjectMemberGetFailureListener(code)
            },
            error(){
                console.log()
            }
        })
    }
}
export interface ProjectMemberGetListener {
    OnProjectMemberGetSuccessListener(data: any): void
    OnProjectMemberGetFailureListener(data: any): void
    OnProjectMemberGetErrorListener(data: any): void
}