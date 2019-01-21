import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsService } from 'app/shared/services/posts.service';
import { CommentsService } from 'app/shared/services/comments.service';
import Post from 'app/shared/models/post';
import Comment from 'app/shared/models/comment';
import CommentTree from 'app/shared/objects/commentTree';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    commentedPost: {
        post: Post,
        commentTree: Array<CommentTree>
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private postService: PostsService,
        private commentService: CommentsService) {
    }

    ngOnInit() {
        this.commentedPost = {post: {} as Post, commentTree: []};
        this.activatedRoute.paramMap.subscribe((params) => {
            this.postService.findById(Number(params.get("id"))).subscribe((post: Post) => {
                this.commentedPost.post = post;
                this.commentService.listByPostId(post.id).subscribe((commentList: Array<Comment>) => {
                    this.commentedPost.commentTree = this.treeify(commentList);
                });
            });
        });
    }

    onClickBack(){
        this.router.navigate(["/posts"]);
    }

    /**
     * O(2n) solution
     * https://stackoverflow.com/questions/22367711/construct-hierarchy-tree-from-flat-list-with-parent-field
     */
    private treeify(list, idAttr?, parentAttr?, childrenAttr?) {
        if (!idAttr) idAttr = 'id';
        if (!parentAttr) parentAttr = 'parent_id';
        if (!childrenAttr) childrenAttr = 'children';
    
        var treeList = [];
        var lookup = {};
        list.forEach(function(obj) {
            lookup[obj[idAttr]] = obj;
            obj[childrenAttr] = [];
        });
        list.forEach(function(obj) {
            if (obj[parentAttr] != null) {
                lookup[obj[parentAttr]][childrenAttr].push(obj);
            } else {
                treeList.push(obj);
            }
        });
        console.log("treeList");
        console.log(treeList);
        return treeList;
    };
}