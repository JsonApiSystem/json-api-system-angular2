import {Input, Component} from '@angular/core';
@Component({
    selector: 'md-button',
    templateUrl: './button.comp.html',
    styleUrls: ['./button.comp.css'],
})
export class ButtonComp {
    @Input() text: String
    @Input() icon: String
    @Input() isFlat: Boolean
    @Input() isLoading: Boolean
    isShow: Boolean = false

    constructor() {
        // this.icon||this.isLoading ? this.isShow = true : this.isShow = false
    }

    toggleLoading() {
        this.isLoading = !this.isLoading
        this.isShow=this.isLoading
    }
}
