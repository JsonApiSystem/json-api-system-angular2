import {Component, ViewChild, ViewChildren, QueryList, Input} from '@angular/core';
import {InputComp} from "../../../../__module/component/input/input.comp";
@Component({
    selector: 'api-param-item',
    templateUrl: './api-param-item.com.html',
    styleUrls: ['./api-param-item.com.css']
})
export class ApiParamItemComp {
    @Input() param: any
    @ViewChild('keyInput') keyInput: InputComp
    @ViewChild('typeInput') typeInput: InputComp
    @ViewChild('isNecessaryInput') isNecessaryInput: InputComp
    @ViewChild('markInput') markInput: InputComp


    constructor() {

    }

    getParam() {
        // console.log(this.keyInput)
        return {
            key: this.keyInput.getValue(),
            type: this.typeInput.getValue(),
            isNecessary: this.isNecessaryInput.getValue(),
            mark: this.markInput.getValue()
        }

    }


}
