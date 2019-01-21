import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { PostsService } from 'app/shared/services/posts.service';
import Post from 'app/shared/models/post';
import * as moment from 'moment';
import * as lodash from "lodash";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    posts: Array<Post>;

    title: string;
    user: string;
    description: string;
    content: string;

    private editing: boolean;

    constructor(private router: Router, private postService: PostsService) {

    }

    ngOnInit() {
        this.editing = false;
        this.title = "";
        this.user = "";
        this.description = "";
        this.content = "";
        this.postService.list().subscribe((posts: Array<Post>) => {
            this.posts = lodash.orderBy(posts, ['publish_date'], ['desc']);
        });
    }

    onClickPost(post: Post){
        this.router.navigate([this.router.url + "/" + post.id]);
    }

    onClickAddPost() {
        this.user = "";
        this.description = "";
        this.title = "";
        this.content = "";
        this.editing = !this.editing;
    }

    isEditing(){
        return this.editing;
    }

    isFormInvalid(){
        return !(this.user.length > 0 && this.content.length > 0 && this.description.length > 0);
    }

    onClickCancelPost(){
        this.editing = !this.editing;
    }

    onClickValidatePost(){
        this.postService.create({
            id: null,
            title: this.title,
            author: this.user,
            description: this.description,
            content: this.content,
            publish_date: moment().format('YYYY[-]MM[-]DD'),
            slug: null
        }).subscribe((res: Post) => {
            this.posts.push(res);
        })
    }
}