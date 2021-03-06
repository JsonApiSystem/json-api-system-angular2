/**
 * NAME : public-component.moudle
 * USER : FollowWinter
 * DATE : 31/12/2016
 * SUMMARY :
 */

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

import {TopNavComp} from "./top-nav/top-nav.comp";
import {ButtonComp} from "./button/button.comp";
import {PageComp} from "./panel/page.comp";
import {CardComp} from "./card/card.comp";
import {InputComp} from "./input/input.comp";
import {LeftMenuComp} from "./left-menu/left-menu.comp";
import {AlertComp} from "./alert/alert.comp";
import {AlertService} from "./alert/alert.comp.service";
import {TextareaComp} from "./md-textarea/textarea.comp";
import {SmallToastService} from "./toast/small-toast.service";
import {SmallToastComponent} from "./toast/small-toast.component";
import {FormsModule} from "@angular/forms";
import {ModalService} from "./modal/modal.comp.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        AlertService,
        SmallToastService,
        ModalService
    ],
    declarations: [
        TopNavComp,
        ButtonComp,
        PageComp,
        CardComp,
        InputComp,
        LeftMenuComp,
        AlertComp,
        TextareaComp,
        SmallToastComponent
    ],
    exports: [
        TopNavComp,
        ButtonComp,
        PageComp,
        CardComp,
        InputComp,
        LeftMenuComp,
        AlertComp,
        TextareaComp,
        SmallToastComponent
    ]
})
export class ComponentModule {

}
