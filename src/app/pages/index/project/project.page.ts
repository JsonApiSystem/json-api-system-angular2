import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AlertService, AlertListener} from "../../../__module/component/alert/alert.comp.service";
import {ProjectModel, ProjectModelListener} from "../../../models/ProjectModel";
import {ProjectPageListener, ProjectPageService} from "./project.service";
import {ProjectNewModalService} from "../../project-new-modal/project-new.modal.service";
import {SmallToastService} from "../../../__module/component/toast/small-toast.service";
import {TopNavService} from "../../../__module/component/top-nav/top-nav.service";
@Component({
    selector: 'project',
    templateUrl: './project.page.html',
    styleUrls: ['./project.page.css']
})
export class ProjectPage extends ProjectPageListener implements OnInit {

    ngOnInit(): void {

    }

    OnProjectGetSuccess(data: any) {
        console.log(data)
        this.projectList = data
    }

    OnProjectGetFailure(code: any) {
        this.smallToastService.showToast('获取项目列表失败', SmallToastService.STYLE_ERROR)
    }

    OnProjectDeleteSuccess() {
        this.projectPageService.init(this)
    }

    OnProjectDeleteFailure(code: number) {

    }

    OnProjectCreateSuccess(data: any) {
        this.projectPageService.init(this, true)
    }

    OnProjectCreateFailure(code: number) {

    }

    projectList: any = ''


    constructor(private router: Router,
                private smallToastService: SmallToastService,
                private projectNewModalService: ProjectNewModalService,
                private projectPageService: ProjectPageService,
                private topNavService: TopNavService) {

        super()
        this.topNavService.title = '项目列表'
        this.topNavService.isShow = false
        this.projectPageService.init(this);

    }

    HandleProjectClick(id: any) {
        this.router.navigate(['index/api', id])
    }

    HandleProjectNewBtnClick() {
        this.projectNewModalService.show("新建项目");
    }
}
