import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { PostsComponent } from './components/posts/posts.component';
import { SHARED_MODULES } from './posts.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [PostsComponent]
})
export class PostsModule {

    constructor( @Optional() @SkipSelf() parentModule: PostsModule) {
        if (parentModule) {
            throw new Error('PostsModule already loaded; Import in root module only.');
        }
    }
}
