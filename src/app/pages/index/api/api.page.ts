import {Component, OnInit} from '@angular/core';
import {ApiPageListener, ApiPageService} from "./api.page.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {TopNavService} from "../../../__module/component/top-nav/top-nav.service";
@Component({
    selector: 'api',
    templateUrl: './api.page.html',
    styleUrls: ['./api.page.css']
})
export class ApiPage extends ApiPageListener implements OnInit {
    ngOnInit(): void {
        // console.log(this.router.params.subscribe())
    }

    OnApiGroupCreateSuccessListener(data: any) {
        this.apiPageService.init(this.projectId['id'], this)
    }

    OnApiGroupGetSuccessListener(data: any) {
        this.groupList = data
    }

    OnApiGroupGetFailureListener(code: any) {

    }

    OnApiGroupDeleteSuccessListener(data: any) {
        this.apiPageService.init(this.projectId['id'], this)
    }

    data: any = []
    groupList: any
    projectId: any

    constructor(private apiPageService: ApiPageService,
                private route: ActivatedRoute,
                private topNavService: TopNavService) {

        super()
        this.topNavService.title='API列表'
        this.topNavService.backText='返回项目'
        this.topNavService.isShow = true

        this.route.params
            .subscribe(id => {
                this.projectId = id
                this.apiPageService.init(id['id'], this)
            });

    }

    HandleGroupAddClick() {
        this.groupList[this.groupList.length] = {}
    }

    OnApiGroupDelete(index: number) {
        if (this.groupList[index]['id'] == undefined) {
            this.groupList.splice(index, 1)
        } else {
            this.apiPageService.deleteGroup(this.groupList[index]['id'])
        }
    }
}
