import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AlertService} from "../../../__module/component/alert/alert.comp.service";
@Component({
    selector: 'project',
    templateUrl: './project.page.html',
    styleUrls: ['./project.page.css']
})
export class ProjectPage {
    constructor(private router: Router,
                private alertService: AlertService) {

    }

    OnProjectClick() {
        this.router.navigate(['index/api'])
    }
}
