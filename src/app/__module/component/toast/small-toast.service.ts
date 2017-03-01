import {Injectable} from "@angular/core";
import forEach = require("core-js/fn/array/for-each");
@Injectable()
export class SmallToastService {

    static STYLE_ERROR = 2;
    static STYLE_SUCCESS = 1;
    private toastList: Array<Toast>;

    constructor() {
        this.toastList = new Array<Toast>();
    }

    public getToastList() {
        return this.toastList;
    }


    public showToast(content: string, style = 1) {
        let timeout = setTimeout(function (toast) {
            arguments[0].toastList.shift()
        }, 2000, this);
        let toast = new Toast(content, style, timeout);

        this.toastList.push(toast)
    }

    public hideToast(index: number) {
        this.toastList[index].clearTimeout()
        this.toastList.splice(index, 1)

    }


}
export class Toast {
    public static SUCCESS = 1
    public static ERROR = 2
    private content: string;
    private style: number;
    private timeout: any

    constructor(content: string, style: number, timeout: any) {
        this.content = content;
        this.style = style
        this.timeout = timeout
    }

    clearTimeout() {
        clearTimeout(this.timeout)
    }


}
export class ToastCallBck {
    OnClick(context: any, index: number) {
        context.hideToast(index)
    }
}