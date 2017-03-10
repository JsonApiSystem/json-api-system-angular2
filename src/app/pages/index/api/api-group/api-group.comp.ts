import {Component, Input, group, OnInit, ViewChild, Output} from '@angular/core';
import {AlertService, AlertListener} from "../../../../__module/component/alert/alert.comp.service";
import {ApiGroupComListener, ApiGroupService} from "./api-group.service";
import {Router} from "@angular/router";
import {ApiNewComp} from "../api-new/api-new.comp";
import {EventEmitter} from "@angular/common/src/facade/async";
@Component({
    selector: 'api-group',
    templateUrl: './api-group.comp.html',
    styleUrls: ['./api-group.comp.css']
})
export class ApiGroupComp extends ApiGroupComListener implements OnInit,AlertListener {
    OnAlertSureBtnClickListener(): void {
    }

    ngOnInit(): void {
        this.apiGroupService.init(this, this.apiGroup['id'])

    }

    OnApiGetSuccessListener(data: any) {
        this.apiList = data
    }

    OnApiGetFailureListener(code: any) {
    }

    OnApiCreateSuccess() {
        this.apiGroupService.init(this, this.apiGroup.id)

    }
    OnApiDeleteSuccess(){
        this.apiGroupService.init(this, this.apiGroup.id)
    }

    @ViewChild('apiNew') apiNew: ApiNewComp
    @Input() apiGroup: any
    @Input() projectId: any

    apiList: any

    constructor(private alertService: AlertService,
                private apiGroupService: ApiGroupService,
                private router: Router,) {
        super()
    }

    HandleTestClick(id: any) {
        this.router.navigate(['index/test', id])
    }

    HandleAddBtnClick(project_id: number) {
        this.apiNew.show()
    }

    HandleDeleteBtnClick(project_id: number) {
        this.alertService.show('确认删除?', '确认删除该分组?', this)
    }
}
