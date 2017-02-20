/**
 * NAME : http.module
 * USER : FollowWinter
 * DATE : 24/01/2017
 * SUMMARY :
 */

import {NgModule} from '@angular/core';
import {Http, Response, HttpModule, RequestOptionsArgs, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {MdHttpService} from "./MdHttpService";
@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        MdHttpService
    ]
})
export class MdHttpModule {
    private headers: Headers;

    constructor(private http: Http,) {
        this.headers = new Headers();
        this.headers.append(
            "content-type", "application/json"
        );
    }

    post(url: string, entity: any, callback: HttpListener) {
        this.http.post(url, this.toFormData(entity), <RequestOptionsArgs>{
            headers: this.headers
        }).toPromise()
            .then(response => {

                let res = response.json();
                if (res['code'] == 200) {
                    callback.success(res['data'])

                } else {
                    callback.failure(res['code'])
                }
            }).catch(error => {
            if (callback.error()) {

            }
        })

        return
    }

    get(url: string, callback: HttpListener) {

        this.http.get(url, < RequestOptionsArgs > {
                headers: this.headers
            }
        ).toPromise()
            .then(response => {

                let res = response.json();
                if (res['code'] == 200) {

                    callback.success(res['data'])

                } else {
                    callback.failure(res['code'])
                }
            }).catch(error => {
            callback.error();
        })
        return
    }

    protected extractData(res: Response) {
        try {
            let data = res.json();
            console.log("url:" + res.url, "data", data);
            return data;
        } catch (Exception) {
            this.handleToJsonError();
        }
    }

    protected handleError(error: any): any {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error("handle error", errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    protected handleToJsonError() {
        console.log("to json error")
    }

    protected toFormData(data: Entity) {
        if (data.hasOwnProperty('create_time')) {
            delete data['create_time']
        }
        if (data.hasOwnProperty('update_time')) {
            delete data['update_time']
        }

        if (data == null) {
            return '';
        }
        console.log("toFormBegin");
        let result: string = '';
        for (var name in data) {
            if (data[name] != null && data[name] != '' && name != 'constructor' && name != 'toFormData') {
                result += name + "=" + data[name] + "&"
            }
        }
        console.log(result);

        return result.substr(0, result.length - 1) || "";
    }
}
export class Entity {

}
export class HttpListener {
    success(data: any) {

    }

    failure(status: number) {

    }

    error() {

    }
}