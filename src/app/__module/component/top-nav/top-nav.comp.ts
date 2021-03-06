import {Component} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

import {UserLocalStorage} from "../../../utils/UserLocalStorage";
import {AlertListener, AlertService} from "../alert/alert.comp.service";
import {TopNavService} from "./top-nav.service";
@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.comp.html',
    styleUrls: ['./top-nav.comp.css']
})
export class TopNavComp implements AlertListener {
    OnAlertSureBtnClickListener(data: any): void {
        this.userLocalStorage.clearUserInfo()
        this.router.navigate(['login'])

    }

    userInfo: any = {
        icon: '',
        nickname: ''
    }


    constructor(private userLocalStorage: UserLocalStorage,
                private alertService: AlertService,
                private router: Router,
                private topNavService:TopNavService,
                private activeRoute:ActivatedRoute) {
        (!userLocalStorage.getUserInfo()) && this.router.navigate(['login'])
        this.userInfo = userLocalStorage.getUserInfo()

    }

    HandleLogoutClick() {
        this.alertService.show('确认退出？', '确认退出登录状态？', this)
    }

    setBackText(text: string) {
        this.topNavService.backText = text

    }

    HandleBckClick(){
        history.back()
    }
}
