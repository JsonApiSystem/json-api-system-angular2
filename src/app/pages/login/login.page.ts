import {Component, ViewChild, Renderer, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonComp} from "../../__module/component/button/button.comp";
import {InputComp} from "../../__module/component/input/input.comp";
import {UserModel} from "../../models/UserModel";
import {SmallToastService} from "../../__module/component/toast/small-toast.service";
@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
    @ViewChild('login') loginBtn: ButtonComp
    @ViewChild('loginInput') loginInput: InputComp
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

    ngOnInit() {
        // var element=this.renderer.selectRootElement('.login-panel')
        console.log()
        // this.selfWidth = this.renderer.selectRootElement('.login-panel').offsetWidth
        // console.log('666666')
        // this.renderer.selectRootElement('.login-panel').offsetWidth
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
        // console.log(event)
        this.selfHeight = this.elementRef.nativeElement.querySelector('.login-panel').offsetWidth
        this.selfWidth = this.elementRef.nativeElement.querySelector('.login-panel').offsetWidth
        this.maxWidth = this.elementRef.nativeElement.querySelector('.page-login').offsetWidth
        this.maxHeight = this.elementRef.nativeElement.querySelector('.page-login').offsetHeight
        this.top = this.maxHeight / 2 - this.selfHeight / 2
        this.left = this.maxWidth / 2 - this.selfWidth / 2
    }


    constructor(private router: Router,
                private renderer: Renderer,
                private elementRef: ElementRef,
                private userModel: UserModel,
                private smallToastService: SmallToastService) {
        // console.log(elementRef.nativeElement)
        // console.log(elementRef.nativeElement.offsetWidth)
        // console.log(this.renderer.selectRootElement('.page-login').offsetWidth)

        // console.log(elementRef.nativeElement.ownerDocument.getElementsByClassName('page-login'))
        // console.log(elementRef.nativeElement.ownerDocument.getElementsByClassName('page-login')[0].offsetHeight)
        // console.log(elementRef.nativeElement.ownerDocument.getElementsByClassName('login-panel')[0].offsetWidth)
        // console.log(elementRef.nativeElement.ownerDocument.getElementsByClassName('login-panel')[0].offsetHeight)


    }


    OnMouseDown($event: any) {
        this.allowMove = true
        this.toLeft = $event.clientX - this.left
        this.toTop = $event.clientY - this.top
        this.selfWidth = $event.view.window.document.getElementsByClassName('login-panel')[0].offsetWidth
        this.selfHeight = $event.view.window.document.getElementsByClassName('login-panel')[0].offsetHeight

    }

    OnMouseMove($event: any) {

        // this.maxWidth = $event.view.window.innerWidth - this.selfWidth
        // this.maxHeight = $event.view.window.innerHeight - this.selfHeight
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


    OnLoginBtnClick() {
        this.loginBtn.toggleLoading()
        this.userModel.httpUserLogin({
            email: this.email,
            password: this.password
        }, this.OnLoginSuccess, this.OnLoginFailure)
    }

    OnLoginSuccess(data: any) {
        this.loginBtn.toggleLoading()
        this.smallToastService.showToast('登录成功')
        this.router.navigate(['index'])

    }

    OnLoginFailure(code: number) {
        this.loginBtn.toggleLoading()
        switch (code) {
            case UserModel.USER_LOGIN_PASSWORD_USERNAME_ERROR: {
                this.smallToastService.showToast('账户名或者密码错误')
                break;
            }
        }
    }

    OnRegisterBtnClick() {
        // this.loginBtn.toggleLoading()
        this.loginInput.right()

    }


}
