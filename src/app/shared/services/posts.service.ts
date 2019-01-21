import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";
import { Observable } from 'rxjs';
import Post from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }

    getHttpClient(){
        return this.http; 
    }

    list(): Observable<Array<Post>> {
        return this.http.get(`${environment.apiURL}/posts`) as Observable<Array<Post>>;
    }

    findById(id: number): Observable<Post> {
        return this.http.get(`${environment.apiURL}/posts/` + id) as Observable<Post>;
    }

    create(post: Post) {
        return this.http.post(`${environment.apiURL}/posts`, post) as Observable<Post>;
    }
}