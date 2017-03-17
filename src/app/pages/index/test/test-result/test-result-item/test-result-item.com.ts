import {Component, Input, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Http} from "@angular/http";
@Component({
    selector: 'test-result-item',
    templateUrl: './test-result-item.com.html',
    styleUrls: ['./test-result-item.com.css']
})
export class TestResultItemComp {
    @Input() data: any

    constructor() {

    }


}
