import {Component, ViewChild, Renderer, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonComp} from "../../__module/component/button/button.comp";
import {InputComp} from "../../__module/component/input/input.comp";
import {UserModel} from "../../models/UserModel";
import {SmallToastService} from "../../__module/component/toast/small-toast.service";
import {LoginPageListener, LoginPageService} from "./login.page.service";
import {UserLocalStorage} from "../../utils/UserLocalStorage";
@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit,LoginPageListener {


    @ViewChild('login') loginBtn: ButtonComp
    @ViewChild('emailInput') emailInput: InputComp
    @ViewChild('passwordInput') passwordInput: InputComp
    @ViewChild('password2Input') password2Input: InputComp
    top: number = 100
    left: number = 0
    allowMove: boolean = false
    toLeft: number
    toTop: number
    maxWidth: number
    maxHeight: number
    selfWidth: number
    selfHeight: number
    type: number = 1
    email: string = ''
    password: string = ''
    password2: string = ''


    constructor(private router: Router,
                private elementRef: ElementRef,
                private userModel: UserModel,
                private smallToastService: SmallToastService,
                private loginPageService: LoginPageService,
                private userLocalStorage:UserLocalStorage) {
        if (userLocalStorage.isLogin()){
            this.router.navigate(['index'])
        }
        loginPageService.setContext(this)

    }

    ngOnInit() {
        this.selfHeight = this.elementRef.nativeElement.querySelector('.login-panel').offsetHeight
        this.selfWidth = this.elementRef.nativeElement.querySelector('.login-panel').offsetWidth
        this.maxWidth = this.elementRef.nativeElement.querySelector('.page-login').offsetWidth
        this.maxHeight = this.elementRef.nativeElement.querySelector('.page-login').offsetHeight
        this.top = this.maxHeight / 2 - this.selfHeight / 2
        this.left = this.maxWidth / 2 - this.selfWidth / 2
    }

    typeToggle() {
        this.type == 1 ? this.type = 2 : this.type = 1
    }

    OnResize($event: any) {
        this.selfHeight = this.elementRef.nativeElement.querySelector('.login-panel').offsetHeight
        this.selfWidth = this.elementRef.nativeElement.querySelector('.login-panel').offsetWidth
        this.maxWidth = this.elementRef.nativeElement.querySelector('.page-login').offsetWidth
        this.maxHeight = this.elementRef.nativeElement.querySelector('.page-login').offsetHeight
        this.top = this.maxHeight / 2 - this.selfHeight / 2
        this.left = this.maxWidth / 2 - this.selfWidth / 2
    }

    OnMouseDown($event: any) {
        this.allowMove = true
        this.toLeft = $event.clientX - this.left
        this.toTop = $event.clientY - this.top
        this.selfWidth = $event.view.window.document.getElementsByClassName('login-panel')[0].offsetWidth
        this.selfHeight = $event.view.window.document.getElementsByClassName('login-panel')[0].offsetHeight

    }

    OnMouseMove($event: any) {
        if (this.allowMove) {
            var moveX = $event.clientX - this.toLeft
            moveX = moveX < 0 ? 0 : moveX
            moveX = moveX < (this.maxWidth - this.selfWidth) ? moveX : this.maxWidth - this.selfWidth
            this.left = moveX
            var moveY = $event.clientY - this.toTop
            moveY = moveY < 0 ? 0 : moveY
            moveY = moveY < (this.maxHeight - this.selfHeight) ? moveY : this.maxHeight - this.selfHeight
            this.top = moveY
        }
        if ($event.clientX <= 0 || $event.clientY <= 0) {
            this.allowMove = false
        }

        if ($event.clientX >= this.maxWidth - 2 || $event.clientY >= this.maxHeight - 2) {
            this.allowMove = false
        }


    }

    OnMouseUp($event: any) {
        this.allowMove = false
    }

    handleLoginBtnClick() {
        this.loginBtn.toggleLoading()
        this.loginPageService.login(
            this.emailInput.getValue(),
            this.passwordInput.getValue()
        )
    }

    OnRegisterBtnClick() {

    }

    OnLoginSuccessListener(data: any): void {
        this.loginBtn.toggleLoading()
        this.smallToastService.showToast('登录成功')
        this.userLocalStorage.setUserInfo(data);
        this.router.navigate(['index'])
    }

    OnLoginFailureListener(code: any): void {
        this.loginBtn.toggleLoading()
        switch (code) {
            case UserModel.USER_LOGIN_PASSWORD_USERNAME_ERROR: {
                this.smallToastService.showToast('账户名或者密码错误')
                break;
            }
        }
    }

    OnLoginErrorListener(): void {
        this.loginBtn.toggleLoading()
        this.smallToastService.showToast('网络错误',SmallToastService.STYLE_ERROR)
    }

    OnRegisterSuccessListener(data: any): void {
    }

    OnRegisterFailureListener(code: any): void {
    }

    OnRegisterError(): void {
    }

}
