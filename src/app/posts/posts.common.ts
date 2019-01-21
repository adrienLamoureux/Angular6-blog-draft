import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { PostsRoutes } from './posts.routes';
import { PostsComponent } from './components/posts/posts.component';
import { letsGetCheckedModule } from '../letsGetChecked/letsGetChecked.module';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>PostsRoutes),
    letsGetCheckedModule
];

export const COMPONENT_DECLARATIONS: any[] = [
    PostsComponent
];
