import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class LetsGetCheckedButtonType {
    public static DEFAULT = "btn btn-outline-primary";
    public static IMPORTANT = "btn btn-primary";
}

@Component({
    selector: 'letsGetChecked-button',
    templateUrl: './letsGetChecked-button.component.html',
    styleUrls: ['./letsGetChecked-button.component.scss']
})
export class LetsGetCheckedButtonComponent implements OnInit {

    @Input() type: string;
    @Input() text: string;
    @Input() isDisabled: boolean;
    @Output() onClickFct: EventEmitter<any> = new EventEmitter();

    constructor(){

    }

    ngOnInit() {
        if(!this.type){
            this.type = LetsGetCheckedButtonType.DEFAULT;
        }
        if(this.type == "important"){
            this.type = LetsGetCheckedButtonType.IMPORTANT;
        }
        if(!this.isDisabled){
            this.isDisabled = false;
        }
    }
}