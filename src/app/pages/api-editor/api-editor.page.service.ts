/**
 * NAME : api-editor.page.service
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core';
@Injectable()
export class ApiEditorService {
    private isShow: boolean = false


    show(){
        this.isShow=true
    }
    hide(){
        this.isShow=false
    }

}