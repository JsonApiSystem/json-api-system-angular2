import {Component, Input, group, OnInit} from '@angular/core';
import {AlertService} from "../../../../__module/component/alert/alert.comp.service";
import {ApiGroupComListener, ApiGroupService} from "./api-group.service";
import {Router} from "@angular/router";
@Component({
    selector: 'api-group',
    templateUrl: './api-group.comp.html',
    styleUrls: ['./api-group.comp.css']
})
export class ApiGroupComp extends ApiGroupComListener implements OnInit {
    ngOnInit(): void {
        this.apiGroupService.init(this, this.apiGroup['id'])

    }

    OnApiGetSuccessListener(data: any) {
        this.apiList = data
    }

    OnApiGetFailureListener(code: any) {

    }

    @Input() apiGroup: any
    apiList: any

    constructor(private alertService: AlertService,
                private apiGroupService: ApiGroupService,
                private router: Router,
                ) {
        super()

    }

    HandleTestClick(id: any) {
        this.router.navigate(['index/test',id])
    }
}
