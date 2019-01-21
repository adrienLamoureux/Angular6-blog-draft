import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/posts' },
    {
        path: 'posts',
        loadChildren: 'app/posts/posts.module#PostsModule'
    }
];
