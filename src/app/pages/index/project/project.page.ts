import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AlertService} from "../../../__module/component/alert/alert.comp.service";
import {ProjectModel, ProjectModelListener} from "../../../models/ProjectModel";
import {ProjectPageListener, ProjectPageService} from "./project.service";
import {ProjectNewModalService} from "../../project-new-modal/project-new.modal.service";
import {SmallToastService} from "../../../__module/component/toast/small-toast.service";
@Component({
    selector: 'project',
    templateUrl: './project.page.html',
    styleUrls: ['./project.page.css']
})
export class ProjectPage extends ProjectPageListener implements OnInit {

    ngOnInit(): void {

    }

    OnProjectGetSuccess(data: any) {
        this.projectList=data
    }

    OnProjectGetFailure(code: any) {
        this.smallToastService.showToast('获取项目列表失败', SmallToastService.STYLE_ERROR)
    }

    projectList: any=''


    constructor(private router: Router,
                private smallToastService: SmallToastService,
                private projectNewModalService: ProjectNewModalService,
                private projectPageService: ProjectPageService) {
        super()
        this.projectPageService.context = this
        this.projectPageService.getProject();

    }

    HandleProjectClick(id:any) {
        this.router.navigate(['index/api',id])
    }

    HandleProjectNewBtnClick() {
        this.projectNewModalService.show("新建项目");
    }
}
