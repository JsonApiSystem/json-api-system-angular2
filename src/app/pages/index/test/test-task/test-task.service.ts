import {Component, Injectable, OnInit, Input} from '@angular/core';
import {ApiGetListener} from "../../../../models/ApiModel";
import {TestCreateListener, TestModel, TestGetListener} from "../../../../models/TestModel";
@Injectable()
export class TestTaskService {


    @Input() api: any

    constructor(private testModel: TestModel) {

    }

    createTest(data: any, context: any) {

        console.log(data);
        this.testModel.httpTestCreate(data, context)
    }

    getTest(data: any, context: any) {
        this.testModel.httpTestGet({
            api_id:data
        },context)
    }
}
export class TestTaskListener implements ApiGetListener,TestCreateListener,TestGetListener {
    OnTestGetSuccess(data: any): void {
    }

    OnTestGetFailure(code: any): void {
    }

    OnTestGetError(): void {
    }
    OnTestCreateSuccess(data: any): void {
    }

    OnTestCreateFailure(code: any): void {
    }

    OnTestCreateError(): void {
    }

    OnProjectCreateSuccess(data: any): void {
    }

    OnProjectCreateFailure(code: any): void {
    }

    OnProjectCreateError(): void {
    }

    OnApiGetSuccessListener(data: any): void {

    }

    OnApiGetFailureListener(code: any): void {
    }

    OnApiGetErrorListener(): void {
    }

}
