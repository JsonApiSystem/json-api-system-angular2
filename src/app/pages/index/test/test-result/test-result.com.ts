import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {Http} from "@angular/http";
import {TestResultService} from "./test-result.service";
@Component({
    selector: 'test-result',
    templateUrl: './test-result.com.html',
    styleUrls: ['./test-result.com.css']
})
export class TestResultComp {

    constructor(private testReportService: TestResultService) {

    }


}
