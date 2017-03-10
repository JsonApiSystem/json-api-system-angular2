import {Component, OnInit, ViewChild} from '@angular/core';
import {TestPageService, TestPageListener} from "./test.page.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Http} from "@angular/http";
import {TestTaskComp} from "./test-task/test-task.comp";
import {TestTaskNewComp} from "./test-task/test-task-new/test-task-new.comp";
@Component({
    selector: 'test-page',
    templateUrl: './test.page.html',
    styleUrls: ['./test.page.css']
})
export class TestPage extends TestPageListener implements OnInit {
    ngOnInit(): void {

    }

    OnApiGetSuccessListener(data: any) {
        this.apiList = data
    }

    OnApiGetFailureListener(code: any) {

    }

    OnApiDetailSuccessListener(data: any) {
        // console.log(data)
        this.testTask.setData(data)
        this.testTaskNew.setData(data)
    }

    OnApiDetailFailureListener(code: any) {

    }

    @ViewChild('testTask') testTask: TestTaskComp
    @ViewChild('testTaskNew') testTaskNew: TestTaskNewComp

    apiList: any

    constructor(private testPageService: TestPageService,
                private router: Router,
                private location: Location,
                private activeRouter: ActivatedRoute) {
        super()
        this.activeRouter.params
            .subscribe(id => {
                this.testPageService.init(this, id)
            });

    }

    HandleTestClick(id: number) {
        this.testPageService.getApiDetail(id)
    }


}
