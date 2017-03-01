/**
 * NAME : login.page.service
 * USER : FollowWinter
 * DATE : 21/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {UserModel} from "../../models/UserModel";
@Injectable()
export class LoginPageService {
    private loginPageListener: LoginPageListener

    constructor(private userModel: UserModel) {

    }

    setContext(context: LoginPageListener) {
        this.loginPageListener = context
    }

    login(email: string, password: string) {
        this.userModel.httpUserLogin({
            email: email,
            pwd: password
        }, this.loginPageListener)
    }
}

export interface LoginPageListener {
    OnLoginSuccessListener(data: any): void
    OnLoginFailureListener(code: any): void
    OnLoginErrorListener(): void
    OnRegisterSuccessListener(data: any): void
    OnRegisterFailureListener(code: any): void
    OnRegisterError(): void
}