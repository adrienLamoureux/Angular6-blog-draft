import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { PostComponent } from './components/post/post.component';
import { SHARED_MODULES } from './post.common';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [PostComponent, CommentsComponent]
})
export class PostModule {

    constructor( @Optional() @SkipSelf() parentModule: PostModule) {
        if (parentModule) {
            throw new Error('PostModule already loaded; Import in root module only.');
        }
    }
}
