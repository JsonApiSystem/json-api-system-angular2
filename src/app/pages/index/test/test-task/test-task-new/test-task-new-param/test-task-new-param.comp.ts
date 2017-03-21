import {Component, OnInit, Input, ViewChildren, QueryList} from '@angular/core';
import {InputComp} from "../../../../../../__module/component/input/input.comp";
@Component({
    selector: 'test-task-new-param',
    templateUrl: './test-task-new-param.comp.html',
    styleUrls: ['./test-task-new-param.comp.css']
})
export class TestTaskNewParamComp {
    @Input() param: any
    @ViewChildren(InputComp) input: QueryList<InputComp>

    setData(data: any) {
        this.param = data
        this.input.map(item=>{
            item.setValue('')
        })
    }

    getData() {
        var data: any = []
        this.input.map(item => {
            var len = data.length
            data[data.length] = {
                key: this.param[len]['key'],
                value: item.getValue()
            }
        })
        return data
    }
}
