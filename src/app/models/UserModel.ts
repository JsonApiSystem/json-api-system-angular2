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
import {SmallToastService} from "../__module/component/toast/small-toast.service";
import {LoginPageListener} from "../pages/login/login.page.service";
@Injectable()
export class UserModel extends Model {

    constructor(private httpService: MdHttpService,
                protected smallToastService: SmallToastService) {
        super(smallToastService)
    }

    static USER_LOGIN_PASSWORD_USERNAME_ERROR = 201

    httpUserLogin(data: any = {email: '', pwd: ''}, listener: LoginPageListener) {
        this.httpService.post(API.API_USER_LOGIN, {
            email: data.email,
            pwd: data.pwd
        }, {
            success(data){
                listener.OnLoginSuccessListener(data)
            },
            failure(code){
                listener.OnLoginFailureListener(code)
            },
            error(){
                listener.OnLoginErrorListener()
            }
        })
    }

    httpUserRegister(data: any = {email: '', pwd: ''}, success: any, failure: any) {
        this.httpService.post(API.API_USER_REGISTER, {
            email: data.email,
            pwd: data.pwd
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

}