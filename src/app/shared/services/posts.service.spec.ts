import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import "jasmine";
import * as moment from 'moment';

describe('PostsService', () => {

    let postsService: PostsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [PostsService]
        });
        postsService = TestBed.get(PostsService);
    });

    it('should get posts list from server with more than 1 elements', (done) => {
        postsService.list().toPromise().then((res) => {
            expect(res.length).toBeGreaterThan(0);
            expect(res[0].id).toEqual(1);
            done();
        });
    });

    it('should get post with id=1 from server', (done) => {
        postsService.findById(1).toPromise().then((res) => {
            expect(res).not.toBeNull();
            expect(res.id).toEqual(1);
            done();
        });
    });

    it('should create a post with on the server', (done) => {
        postsService.create({
            id: null,
            title: "test post",
            author: "Jasmine",
            description: "Jasmine test case",
            content: "An unexplicit Jasmine test case content",
            publish_date: moment().format('YYYY[-]MM[-]DD'),
            slug: "test-post-Jasmine"
        }).toPromise().then((res) => {
            expect(res).not.toBeNull();
            expect(res.slug).toEqual("test-post-Jasmine");
            done();
        });
    });
});
