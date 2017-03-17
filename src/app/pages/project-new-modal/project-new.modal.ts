import {Component, ViewChild} from '@angular/core';
import {ProjectNewModalService} from "./project-new.modal.service";
import {InputComp} from "../../__module/component/input/input.comp";
import {ProjectPageService} from "../index/project/project.service";
import {TextareaComp} from "../../__module/component/md-textarea/textarea.comp";
@Component({
    selector: 'project-new-modal',
    templateUrl: './project-new.modal.html',
    styleUrls: ['./project-new.modal.css']
})
export class ProjectNewModal {

    @ViewChild('nameInput') nameInput: InputComp
    @ViewChild('summaryInput') summaryInput: TextareaComp

    constructor(private projectNewModalService: ProjectNewModalService,
                private projectPageService: ProjectPageService) {

    }

    HandleProjectNewModalCreateClick() {
        this.projectNewModalService.hide()
        this.projectPageService.createProject({
            name:this.nameInput.getValue(),
            summary:this.summaryInput.getValue()
        })

    }

    HandleProjectNewModalCancelClick() {
        this.projectNewModalService.hide()
    }
}
