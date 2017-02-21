/**
 * NAME : UserLocalStorage
 * USER : FollowWinter
 * DATE : 20/02/2017
 * SUMMARY :
 */

export class UserLocalStorage {
    static USER_INFO = 'USER_INFO'

    getUserInfo() {
        return localStorage.getItem(UserLocalStorage.USER_INFO)
    }

    setUserInfo(userInfo: any) {
        localStorage.setItem(UserLocalStorage.USER_INFO, JSON.stringify(userInfo))
    }

    clearUserInfo() {
        localStorage.removeItem(UserLocalStorage.USER_INFO)
    }
}