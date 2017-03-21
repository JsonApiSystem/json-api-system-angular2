import {Injectable} from '@angular/core';
import {AppPageService} from "../../../pages/app.page.service";
@Injectable()
export class ModalService extends AppPageService{
    isShow: boolean = false
    title: string
    data: any

    constructor() {
        super()
    }

    show(title: string, data: any='') {
        this.title = title
        this.isShow = true
        this.data = data
    }

    hide() {
        this.isShow = false
    }
}
