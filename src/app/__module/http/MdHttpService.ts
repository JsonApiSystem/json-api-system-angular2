import {Injectable} from '@angular/core';
import {Http, Response, HttpModule, RequestOptionsArgs, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class MdHttpService {
    private headers: Headers;

    constructor(private http: Http,) {
        this.headers = new Headers();
        this.headers.append(
            "content-type", "application/json"
        );
    }

    post(url: string, data: any, callback: MdHttpListener) {

        this.http.post(url, this.transToJsonData(data), <RequestOptionsArgs>{
            headers: this.headers
        }).toPromise()
            .then(response => {
                if (response.status == 200) {
                    callback.success(response.json()['data'])

                } else {
                    callback.failure(response.status)
                }
            }).catch(error => {
            if (callback.error) {
                callback.error(error.status)
            }
        })

        return
    }

    get(url: string, callback: MdHttpListener) {

        this.http.get(url, < RequestOptionsArgs > {
                headers: this.headers
            }
        ).toPromise()
            .then(response => {

                if (response.status == 200) {
                    callback.success(response.json()['data'])

                } else {
                    callback.failure(response.status)
                }
            }).catch(error => {
            if (callback.error) {
                callback.error(error)
            }
        })
        return
    }

    protected handleError(error: any): any {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error("handle error", errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    protected transToJsonData(data: any) {

        data = this.filterNullParam(data)
        return JSON.stringify({
            data: data,
            timestamp: new Date().getTime(),
            sign: ''
        })
    }

    private filterNullParam(data: any) {
        for (let p in data) {
            if(data[p]==''||data[p]==0||data[p]==null||data[p]=='undefined'||data[p]==undefined){
                delete data[p]
            }
        }
        return data
    }

}
export class MdHttpListener {
    success(data: any) {

    }

    failure(status: number) {

    }

    error(error:any) {

    }
}