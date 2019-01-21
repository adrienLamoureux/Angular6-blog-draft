import { AppRoutingModule } from './app-routing.module';
// demo
import { letsGetCheckedModule } from './letsGetChecked/letsGetChecked.module';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    letsGetCheckedModule
];

export * from './app-routing.module';
