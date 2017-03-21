import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';
@Component({
    selector: 'api-response',
    templateUrl: './api-response.com.html',
    styleUrls: ['./api-response.com.css']
})
export class ApiResponseComp {
    response:Array<any>=[]
    constructor() {
    }
    HandleResponseDeleteBtnClick(index: number) {
        this.response.splice(index, 1)
    }

    HandleResponseAddBtnClick() {
        this.response[this.response.length] = {}
    }
    setResponse(response: string) {
        if (response != '') {
            this.response = JSON.parse(response)
        }

    }

    getResponse() {
        console.log(this.response)
        return JSON.stringify(this.response)
    }


}
