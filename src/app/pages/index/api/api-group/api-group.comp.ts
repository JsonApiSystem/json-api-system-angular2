import {Component, Input,EventEmitter, group, OnInit, ViewChild, Output} from '@angular/core';
import {AlertService, AlertListener} from "../../../../__module/component/alert/alert.comp.service";
import {ApiGroupComListener, ApiGroupService} from "./api-group.service";
import {Router} from "@angular/router";
import {ApiNewComp} from "../api-new/api-new.comp";
import {InputComp} from "../../../../__module/component/input/input.comp";
import {ApiPageService} from "../api.page.service";
@Component({
    selector: 'api-group',
    templateUrl: './api-group.comp.html',
    styleUrls: ['./api-group.comp.css']
})
export class ApiGroupComp extends ApiGroupComListener implements OnInit,AlertListener {
    OnAlertSureBtnClickListener(): void {
    }

    ngOnInit(): void {
        if (this.apiGroup['id']!=undefined){
            this.apiGroupService.init(this, this.apiGroup['id'])
        }
    }

    OnApiGetSuccessListener(data: any) {
        this.apiList = data
        this.count=data.length
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
    @ViewChild('nameInput') nameInput: InputComp
    @Input() apiGroup: any
    @Input() projectId: any
    @Input() index:any
    @Output() OnApiGroupDelete = new EventEmitter<any>();
    apiList: any
    count:any=0


    constructor(private alertService: AlertService,
                private apiGroupService: ApiGroupService,
                private apiPageService:ApiPageService,
                private router: Router,) {
        super()
    }

    HandleTestClick(id: any) {
        this.router.navigate(['index/test', id])
    }

    HandleAddBtnClick(project_id: number) {
        this.apiNew.show()
    }

    HandleDeleteBtnClick() {
        // this.alertService.show('确认删除?', '确认删除该分组?', this,project_id)
        this.OnApiGroupDelete.emit(this.index)
    }
    HandleSaveClick(){
        this.apiPageService.createGroup(this.nameInput.getValue(),this.projectId['id'])
    }

}
