import {Component, OnInit} from '@angular/core';
import {ApiPageListener, ApiPageService} from "./api.page.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: 'api',
    templateUrl: './api.page.html',
    styleUrls: ['./api.page.css']
})
export class ApiPage extends ApiPageListener implements OnInit {
    ngOnInit(): void {
        // console.log(this.router.params.subscribe())
    }

    OnApiGroupGetSuccessListener(data: any) {
        console.log(data)
        this.groupList = data
    }

    OnApiGroupGetFailureListener(code: any) {

    }

    groupList: any
    projectId: any

    constructor(private apiPageService: ApiPageService,
                private route: ActivatedRoute) {
        super()
        this.apiPageService.context = this

        // this.apiPageService.getApiGroup(this.router.params['id'])
        this.route.params
            .subscribe(id => {
                this.projectId = id['id']
                this.apiPageService.getApiGroup(id)
            });

    }

}
