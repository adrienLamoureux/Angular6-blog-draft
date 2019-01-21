import { Component, OnInit, Input } from '@angular/core';
import CommentTree from 'app/shared/objects/commentTree';
import { CommentsService } from 'app/shared/services/comments.service';
import * as moment from 'moment';
import Comment from 'app/shared/models/comment';

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

    @Input() comments: Array<CommentTree>;

    constructor(private commentsService: CommentsService) {
    }

    ngOnInit() {

    }

    onClickAddComment(comment){
        comment.editing = true;
        comment.newComment = {
            id: null,
            postId: comment.postId,
            parent_id: comment.id,
            date: null,
            user: "",
            content: ""
        }
    }

    onClickEditComment(comment: CommentTree){
        comment.editing = true;
        comment.newComment = {
            id: comment.id,
            postId: comment.postId,
            parent_id: null !== comment.parent_id ? Number(comment.parent_id) : null,
            date: null,
            user: comment.user,
            content: comment.content
        }
    }

    onClickCancelComment(comment){
        comment.editing = false;
    }

    onClickValidateComment(comment: CommentTree){
        comment.newComment.date = moment().format('YYYY[-]MM[-]DD');
        comment.newComment.id ? this.updateComment(comment) : this.createComment(comment);
    }

    isFormInvalid(comment){
        return !(comment.newComment.user.length > 0 && comment.newComment.content.length > 0);
    }

    isEditing(comment) {
        return comment.editing;
    }

    actionText(comment: CommentTree){
        return comment.newComment.id !== null ? "Update" : "Send";
    }

    private updateComment(comment: CommentTree){
        this.commentsService.update(comment.newComment.id, comment.newComment).subscribe((res: CommentTree) => {
            comment.newComment = null;
            comment.user = res.user;
            comment.content = res.content;
            comment.date = res.date; 
            comment.editing = false;
        });
    }

    private createComment(comment: CommentTree){
        this.commentsService.createByPostId(comment.postId, comment.newComment).subscribe((res: CommentTree) => {
            comment.newComment = null;
            res.children = [];
            comment.children.push(res);
            comment.editing = false;
        });
    }
}