import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { PostRoutes } from './post.routes';
import { PostComponent } from './components/post/post.component';
import { letsGetCheckedModule } from '../letsGetChecked/letsGetChecked.module';
import { CommentsComponent } from './components/comments/comments.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>PostRoutes),
    letsGetCheckedModule
];

export const COMPONENT_DECLARATIONS: any[] = [
    CommentsComponent,
    PostComponent
];
