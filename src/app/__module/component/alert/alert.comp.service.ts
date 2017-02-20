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

    show(title: string, content: string, alertListener: AlertListener) {
        this.isShow = true
        this.title = title
        this.content = content
        this.alertListener = alertListener
    }

    hide() {
        this.isShow = false
    }

    OnSureListener() {
        this.hide()
        this.alertListener.OnSureBtnClickListener()
    }

}
export interface AlertListener {
    OnSureBtnClickListener(): void;
}