import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'letsGetChecked-input',
    templateUrl: './letsGetChecked-input.component.html',
    styleUrls: ['./letsGetChecked-input.component.scss']
})
export class LetsGetCheckedInputComponent implements OnInit {

    @Input() errMsg: string;
    @Input() isRequired: boolean;
    @Input() placeholder: string;
    @Input() description: string;
    @Input() isDisabled: boolean;
    @Input() myModel: string;
    @Input() isTextArea: boolean;
        
    @Output() myModelChange = new EventEmitter();

    constructor(){

    }

    ngOnInit() {
        if(!this.placeholder){
            this.placeholder = "";
        }
        if(!this.description){
            this.description = "";
        }
    }

    onModelChange($event) {
        this.myModelChange.emit($event);
    }
}