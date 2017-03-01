import {Input, Component} from '@angular/core';
@Component({
    selector: 'md-input',
    templateUrl: './input.comp.html',
    styleUrls: ['./input.comp.css'],
})
export class InputComp {
    @Input() icon: string
    @Input() type: string = 'text'
    @Input() placeholder: string = '请输入内容'
    @Input() iconRight: string
    value: string
    isRight: number = 1


    constructor() {

    }

    right() {
        this.iconRight = 'check'
        this.isRight = 2
    }

    error() {
        this.iconRight = 'times'
        this.isRight = 3
    }

    getValue() {
        return this.value
    }
}
