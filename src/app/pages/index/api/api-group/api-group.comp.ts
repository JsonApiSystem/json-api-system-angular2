import {Component} from '@angular/core';
import {AlertService} from "../../../../__module/component/alert/alert.comp.service";
@Component({
    selector: 'api-group',
    templateUrl: './api-group.comp.html',
    styleUrls: ['./api-group.comp.css']
})
export class ApiGroupComp {
    constructor(private alertService: AlertService) {

    }

    OnAddBtnClick() {

    }

    OnDeleteBtnClick() {
        this.alertService.show('删除', '确认删除该分组', {
            OnSureBtnClickListener(){
                console.log('确认删除该分组')
            }
        })
    }
}
