import {Injectable} from "@angular/core";
/**
 * NAME : UserLocalStorage
 * USER : FollowWinter
 * DATE : 20/02/2017
 * SUMMARY :
 */
@Injectable()
export class UserLocalStorage {
    static USER_INFO = 'USER_INFO'

    getUserInfo() {
        return JSON.parse(localStorage.getItem(UserLocalStorage.USER_INFO));
    }

    setUserInfo(userInfo: any) {
        localStorage.setItem(UserLocalStorage.USER_INFO, JSON.stringify(userInfo))
    }

    clearUserInfo() {
        localStorage.removeItem(UserLocalStorage.USER_INFO)
    }
    getUserId(){
        return this.getUserInfo()['id']
    }

    isLogin() {
        if (this.getUserInfo() == null) {
            return false;
        } else {
            return true;
        }
    }
}