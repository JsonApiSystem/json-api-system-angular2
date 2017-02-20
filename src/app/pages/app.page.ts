import {Component} from '@angular/core';
import '../../../public/css/styles.css';
import {UserModel} from "../models/UserModel";
@Component({
    selector: 'my-app',
    templateUrl: './app.page.html',
    styleUrls: ['./app.page.css']
})
export class AppPage {
    constructor(private userModel: UserModel) {
        userModel.httpUserLogin('846815443@qq.com', '123456', function (data: any) {
            console.log(data)
        }, function (code: any) {
            console.log(code)
        });
    }
}
