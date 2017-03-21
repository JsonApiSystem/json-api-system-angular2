import {Component, Injectable} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Injectable()
export class TopNavService {
    backText: string = '返回'
    title: string = '标题'
    isShow: boolean = true;
}
