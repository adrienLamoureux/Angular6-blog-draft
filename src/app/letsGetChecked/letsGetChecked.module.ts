import { NgModule } from '@angular/core';
// app
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './letsGetChecked.common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        ...SHARED_MODULES
    ],
    exports: [
        ...COMPONENT_DECLARATIONS,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ]
})
export class letsGetCheckedModule {

    constructor() {
        
    }
}
