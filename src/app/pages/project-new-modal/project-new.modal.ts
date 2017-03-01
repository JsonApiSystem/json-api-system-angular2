import {Component} from '@angular/core';
import {ProjectNewModalService} from "./project-new.modal.service";
@Component({
    selector: 'project-new-modal',
    templateUrl: './project-new.modal.html',
    styleUrls: ['./project-new.modal.css']
})
export class ProjectNewModal {
    constructor(private projectNewModalService: ProjectNewModalService) {

    }

    HandleProjectNewClick() {

    }

}
