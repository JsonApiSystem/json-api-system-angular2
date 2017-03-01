/**
 * NAME : api-editor.page.service
 * USER : FollowWinter
 * DATE : 19/02/2017
 * SUMMARY :
 */
import {Injectable} from '@angular/core';
import {ModalService} from "../../__module/component/modal/modal.comp.service";
@Injectable()
export class ProjectNewModalService extends ModalService {
    title: string
}