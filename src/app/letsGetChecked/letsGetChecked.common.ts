import { SharedModule } from '../shared';
import { LetsGetCheckedInputComponent } from './components/input/letsGetChecked-input.component';
import { LetsGetCheckedButtonComponent } from './components/button/letsGetChecked-button.component';
import { LetsGetCheckedHintComponent } from './components/hint/letsGetChecked-hint.component';

export const SHARED_MODULES: any[] = [
    SharedModule
];

export const COMPONENT_DECLARATIONS: any[] = [
    LetsGetCheckedInputComponent,
    LetsGetCheckedButtonComponent,
    LetsGetCheckedHintComponent
];