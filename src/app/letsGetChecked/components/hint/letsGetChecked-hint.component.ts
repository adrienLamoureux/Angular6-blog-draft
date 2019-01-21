import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'letsGetChecked-hint',
    templateUrl: './letsGetChecked-hint.component.html',
    styleUrls: ['./letsGetChecked-hint.component.scss']
})
export class LetsGetCheckedHintComponent implements OnInit {

    @Input() field: any;

    constructor(){

    }

    ngOnInit() {
       
    }
}