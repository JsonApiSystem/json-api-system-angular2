/**
 * NAME : api-editor.page.service
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core';
@Injectable()
export class ProjectEditorService {
     isShow: boolean = false
    title:string

    show(){
        this.isShow=true
    }
    hide(){
        this.isShow=false
    }


}