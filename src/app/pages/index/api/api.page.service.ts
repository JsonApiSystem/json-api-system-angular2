import {Injectable} from "@angular/core";
import {
    ApiGroupGetListener, ApiGroupModel, ApiGroupCreateListener,
    ApiGroupDeleteListener
} from "../../../models/ApiGroupModel";
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

    init(id: any, context: any) {
        this.setContext(context)
        this.getApiGroup(id)
    }

    createGroup(name: string, project_id: number) {
        this.apiGroupModel.httpApiGroupCreate({
            project_id: project_id,
            name: name,
        }, this.context)
    }

    deleteGroup(id:number) {
        this.apiGroupModel.httpApiGroupDelete({
            id:id
        },this.context)
    }
}

export class ApiPageListener implements ApiGroupGetListener,ApiGroupCreateListener,ApiGroupDeleteListener {
    OnApiGroupDeleteSuccessListener(data: any): void {
    }

    OnApiGroupDeleteFailureListener(code: any): void {
    }

    OnApiGroupDeleteErrorListener(): void {
    }
    OnApiGroupCreateSuccessListener(data: any): void {
    }

    OnApiGroupCreateFailureListener(code: any): void {
    }

    OnApiGroupCreateErrorListener(): void {
    }
    OnApiGroupGetSuccessListener(data: any): void {
    }

    OnApiGroupGetFailureListener(code: any): void {
    }

    OnApiGroupGetErrorListener(): void {
    }


}