import {Component, ViewChild, ViewChildren, QueryList, Input} from '@angular/core';
import {ApiParamItemComp} from "./api-param-item/api-param-item.com";
@Component({
    selector: 'api-param',
    templateUrl: './api-param.com.html',
    styleUrls: ['./api-param.com.css']
})
export class ApiParamComp {
    @Input()param: Array<any> = []

    constructor() {
    }

    @ViewChildren(ApiParamItemComp) apiParamItems: QueryList<ApiParamItemComp>

    HandleParamDeleteBtnClick(index: number) {
        this.param.splice(index, 1)
    }

    HandleParamAddBtnClick() {
        this.param[this.param.length] = {}
    }

    setParam(param: string) {
        if (param != '') {
            this.param = JSON.parse(param)
        }

    }

    getParam() {
        let data:any=[]
        this.apiParamItems.map(item => {
            data[data.length] = item.getParam()
        })
        return JSON.stringify(data)
    }

}
