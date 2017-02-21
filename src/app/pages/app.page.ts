import {Component} from '@angular/core';
import '../../../public/css/styles.css';
import {UserModel} from "../models/UserModel";
import {ProjectModel} from "../models/ProjectModel";
import {ApiGroupModel} from "../models/ApiGroupModel";
import {ApiModel} from "../models/ApiModel";
import {SmallToastService} from "../__module/component/toast/small-toast.service";
@Component({
    selector: 'my-app',
    templateUrl: './app.page.html',
    styleUrls: ['./app.page.css']
})
export class AppPage {
    constructor() {
    }
}
