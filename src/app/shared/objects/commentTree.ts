import Comment from "../models/comment";

export default interface CommentTree extends Comment {
    children?: Array<CommentTree>;
    editing?: boolean;
    newComment?: CommentTree;
}