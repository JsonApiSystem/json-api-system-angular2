import {Component, OnInit} from '@angular/core';
import {TestPageService, TestPageListener} from "./test.page.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
@Component({
    selector: 'test-page',
    templateUrl: './test.page.html',
    styleUrls: ['./test.page.css']
})
export class TestPage extends TestPageListener implements OnInit {

    ngOnInit(): void {

    }

    OnApiGetSuccessListener(data: any) {
        console.log(data)
        this.apiList = data
    }

    OnApiGetFailureListener(code: any) {

    }

    apiList: any

    constructor(private testPageService: TestPageService,
                private router: Router,
                private location: Location,
                private activeRouter: ActivatedRoute) {
        super()
        this.activeRouter.params
            .subscribe(id => {
                this.testPageService.init(this,id)
            });

    }



}
