/**
 * NAME : alert.com.server
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core';
@Injectable()
export class AlertService {
    isShow: Boolean = false
    private alertListener: AlertListener
    title: string;
    content: string;
    data:any

    show(title: string, content: string, alertListener: AlertListener,data:any='') {
        this.isShow = true
        this.title = title
        this.content = content
        this.alertListener = alertListener
        this.data=data
    }

    hide() {
        this.isShow = false
    }

    OnSureListener() {
        this.hide()
        this.alertListener.OnAlertSureBtnClickListener(this.data)
    }

}
export interface AlertListener {
    OnAlertSureBtnClickListener(data:any): void;
}