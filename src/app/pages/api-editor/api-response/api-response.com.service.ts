/**
 * NAME : api-editor.page.service
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core';
import {ApiCreateListener, ApiUpdateListener, ApiModel, ApiDetailListener} from "../../models/ApiModel";
import {isArray} from "rxjs/util/isArray";
import {el} from "@angular/platform-browser/testing/browser_util";

export class ApiEditorListener implements ApiUpdateListener,ApiDetailListener {
    OnApiDetailSuccessListener(data: any): void {
    }

    OnApiDetailFailureListener(code: any): void {
    }

    OnApiDetailErrorListener(): void {
    }

    OnApiUpdateSuccessListener(data: any): void {
    }

    OnApiUpdateFailureListener(code: any): void {
    }

    OnApiUpdateErrorListener(): void {
    }


}
@Injectable()
export class ApiEditorService extends ApiEditorListener {
    OnApiDetailSuccessListener(data: any): void {
        data['param'] = JSON.parse(data['param'])
        this.apiDetail = data
    }


    private isShow: boolean = false
    private apiId: number
    apiDetail = {}


    constructor(private apiModel: ApiModel) {
        super()
    }

    show(id: any) {
        this.apiId = id
        this.isShow = true
        this.apiModel.httpApiDetail({
            id: id
        }, this)
    }

    hide() {
        this.isShow = false
    }

    addParam() {
        if (this.apiDetail['param'] == null) {
            this.apiDetail['param'] = []
        } else {
            if (this.apiDetail['param'] instanceof Array) {

            } else {
                this.apiDetail['param'] = JSON.parse(this.apiDetail['param'])
            }
        }
        var param = this.apiDetail['param']
        param[param.length] = {
            key: '',
            value: '',
            type: 1,
            isNecessary: false,
            mark: ''
        }
        this.apiDetail['param'] = param

    }

    deleteParam(index: number) {
        console.log(index)
        var param = this.apiDetail['param']
        param.splice(index, 1)
        this.apiDetail['param'] = param
    }

    save(context: any, param: any) {
        console.log(this.apiDetail)
        return;
        // var data = this.apiDetail
        // data['param'] = JSON.stringify(this.apiDetail['param'])
        // data['response']=JSON.stringify(this.apiDetail['response'])
        // this.apiModel.httpApiUpdate(data, context)
    }

    addResponse() {
        if (this.apiDetail['response'] == null) {
            this.apiDetail['response'] = []
        } else {
            if (this.apiDetail['response'] instanceof Array) {

            } else {
                this.apiDetail['response'] = JSON.parse(this.apiDetail['response'])
            }
        }
        var response = this.apiDetail['response']
        response[response.length] = {
            key: '',
            type: 1,
            mark: ''
        }
        this.apiDetail['response'] = response
    }

    deleteResponse(index: number) {
        var response = this.apiDetail['response']
        response.splice(index, 1)
        this.apiDetail['response'] = response
    }
}
