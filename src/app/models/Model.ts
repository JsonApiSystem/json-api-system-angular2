import {SmallToastService} from "../__module/component/toast/small-toast.service";
import {Injectable} from "@angular/core";
import {SmallToastComponent} from "../__module/component/toast/small-toast.component";
/**
 * NAME : Model
 * USER : FollowWinter
 * DATE : 21/02/2017
 * SUMMARY :
 */

@Injectable()
export class Model {
    static ERROR_NETWORK = 500

    constructor(protected smallToastService: SmallToastService) {

    }

    protected OnErrorListener(code: number) {
        switch (code) {
            case Model.ERROR_NETWORK: {
                this.smallToastService.showToast('网路错误', SmallToastService.STYLE_ERROR);
                break;
            }
            default:{
                this.smallToastService.showToast('网路错误', SmallToastService.STYLE_ERROR);
                break;
            }
        }


    }
}