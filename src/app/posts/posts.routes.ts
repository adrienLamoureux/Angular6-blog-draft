import { Routes } from '@angular/router';
// app
import { PostsComponent } from './components/posts/posts.component';

export const PostsRoutes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: ':id',
        loadChildren: 'app/post/post.module#PostModule'
    }
];
