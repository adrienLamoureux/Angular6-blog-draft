import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";
import Comment from '../models/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }

    listByPostId(postId: number): Observable<Array<Comment>> {
        return this.http.get(`${environment.apiURL}/posts/` + postId + `/comments`) as Observable<Array<Comment>>;
    }

    createByPostId(postId: number, comment: Comment): Observable<Comment> {
        return this.http.post(`${environment.apiURL}/posts/` + postId + `/comments`, comment) as Observable<Comment>;
    }

    update(id: number, comment: Comment): Observable<Comment> {
        return this.http.put(`${environment.apiURL}/comments/`+id, comment) as Observable<Comment>;
    }
}