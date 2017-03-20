/**
 * NAME : login.page.service
 * USER : FollowWinter
 * DATE : 21/02/2017
 * SUMMARY :
 */

import {Injectable} from "@angular/core";
import {AppPageService} from "../app.page.service";
@Injectable()
export class ReportPageService extends AppPageService{
    init(id: number, context: any) {
        console.log(id)
    }
}
