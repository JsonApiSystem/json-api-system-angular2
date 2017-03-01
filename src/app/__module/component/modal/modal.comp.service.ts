import {Injectable} from '@angular/core';
@Injectable()
export class ModalService {
    isShow: boolean = false
    title: string

    constructor() {

    }

    show(title: string) {
        this.title = title
        this.isShow = true

    }

    hide() {
        this.isShow = false
    }
}
