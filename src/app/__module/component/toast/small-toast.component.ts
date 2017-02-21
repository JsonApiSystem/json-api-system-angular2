import {Component, style, state, animate, transition, trigger} from '@angular/core'
import {SmallToastService} from "./small-toast.service";
@Component({
    selector: 'small-toast',
    templateUrl: './small-toast.component.html',
    styleUrls: ['./small-toast.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateY(0)'})),
            transition('void => *', [
                style({transform: 'translateX(100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateY(-100%)'}))
            ])
        ])
    ]

})
export class SmallToastComponent {
    constructor(private toastService: SmallToastService) {

    }

    OnToastClick(i: number) {
        this.toastService.hideToast(i)
    }
}
