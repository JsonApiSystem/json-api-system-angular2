import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserLocalStorage} from "../../utils/UserLocalStorage";
@Component({
    selector: 'index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.css']
})
export class IndexPage {
    constructor(private userLocalStorage: UserLocalStorage,
                private router: Router) {
        if (!this.userLocalStorage.isLogin()) {
            this.router.navigate(['login'])
        }
    }
}
