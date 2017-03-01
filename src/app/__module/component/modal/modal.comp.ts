import {Input, Component} from '@angular/core';
import {ModalService} from "./modal.comp.service";
@Component({
    selector: 'modal',
    templateUrl: './modal.comp.html',
    styleUrls: ['./modal.comp.css'],
})
export class ModalComp {
    constructor(private modalService: ModalService) {

    }
}
