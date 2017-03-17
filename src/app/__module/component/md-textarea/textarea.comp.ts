import {Input, Component} from '@angular/core';
@Component({
    selector: 'md-textarea',
    templateUrl: './textarea.comp.html',
    styleUrls: ['./textarea.comp.css'],
})
export class TextareaComp {

    @Input()value:any
    constructor() {

    }
    getValue(){
        return this.value
    }



}
