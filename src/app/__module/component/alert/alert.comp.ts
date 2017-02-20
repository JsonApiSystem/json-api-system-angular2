import {Input, Component, OnInit, ViewChild, Renderer, ElementRef} from '@angular/core';
import {AlertService} from "./alert.comp.service";
@Component({
    selector: 'md-alert',
    templateUrl: './alert.comp.html',
    styleUrls: ['./alert.comp.css'],
})
export class AlertComp {
    // top: number = 100
    // left: number = 0
    // allowMove: boolean = false
    // toLeft: number
    // toTop: number
    // maxWidth: number
    // maxHeight: number
    // selfWidth: number
    // selfHeight: number


    constructor(private elementRef: ElementRef,
                private renderer: Renderer,
                private alertService: AlertService) {
    }

    OnCancelBtnClick() {
        this.alertService.hide()
    }

    OnSureBtnClick() {
        this.alertService.OnSureListener()
    }


    //
    // OnResize($event: any) {
    //     // console.log(event)
    //     if (this.alertService.isShow) {
    //         this.selfHeight = this.elementRef.nativeElement.querySelector('.box-alert').offsetHeight
    //         this.selfWidth = this.elementRef.nativeElement.querySelector('.box-alert').offsetWidth
    //         this.maxWidth = this.elementRef.nativeElement.querySelector('.comp-alert').offsetWidth
    //         this.maxHeight = this.elementRef.nativeElement.querySelector('.comp-alert').offsetHeight
    //         this.top = this.maxHeight / 2 - this.selfHeight / 2
    //         this.left = this.maxWidth / 2 - this.selfWidth / 2
    //     }
    // }

    OnBackgroundMouseDown($event: any) {
        // if ($event.clientX < this.left
        //     || $event.clientY < this.top
        //     || $event.clientX > (this.left + this.selfWidth)
        //     || $event.clientY > (this.top + this.selfHeight)
        // ) {
        //     console.log('hide')
        //     this.alertService.hide()
        // }
    }

    // OnMouseDown($event: any) {
    //     if (this.alertService.isShow) {
    //         this.allowMove = true
    //         this.toLeft = $event.clientX - this.left
    //         this.toTop = $event.clientY - this.top
    //         this.selfWidth = $event.view.window.document.getElementsByClassName('box-alert')[0].offsetWidth
    //         this.selfHeight = $event.view.window.document.getElementsByClassName('box-alert')[0].offsetHeight
    //     }
    //
    //
    // }
    //
    // OnMouseMove($event: any) {
    //
    //     // this.maxWidth = $event.view.window.innerWidth - this.selfWidth
    //     // this.maxHeight = $event.view.window.innerHeight - this.selfHeight
    //     if (this.allowMove) {
    //         var moveX = $event.clientX - this.toLeft
    //         moveX = moveX < 0 ? 0 : moveX
    //         moveX = moveX < (this.maxWidth - this.selfWidth) ? moveX : this.maxWidth - this.selfWidth
    //         this.left = moveX
    //         var moveY = $event.clientY - this.toTop
    //         moveY = moveY < 0 ? 0 : moveY
    //         moveY = moveY < (this.maxHeight - this.selfHeight) ? moveY : this.maxHeight - this.selfHeight
    //         this.top = moveY
    //     }
    //     if ($event.clientX <= 0 || $event.clientY <= 0) {
    //         this.allowMove = false
    //     }
    //
    //     if ($event.clientX >= this.maxWidth - 2 || $event.clientY >= this.maxHeight - 2) {
    //         this.allowMove = false
    //     }
    //
    //
    // }
    //
    // OnMouseUp($event: any) {
    //     this.allowMove = false
    // }
}
