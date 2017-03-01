import {Injectable} from "@angular/core";
import {ApiGroupGetListener, ApiGroupModel} from "../../../models/ApiGroupModel";
import {AppPageService} from "../../app.page.service";
@Injectable()
export class ApiPageService extends AppPageService {

    constructor(private apiGroupModel: ApiGroupModel) {
        super()
    }

    getApiGroup(id: any) {
        this.apiGroupModel.httpApiGroupGet({
            project_id: id
        }, this.context)
    }
}

export class ApiPageListener implements ApiGroupGetListener {
    OnApiGroupGetSuccessListener(data:any): void {
    }

    OnApiGroupGetFailureListener(code:any): void {
    }

    OnApiGroupGetErrorListener(): void {
    }


}