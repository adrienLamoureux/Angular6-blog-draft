import { TestBed } from '@angular/core/testing';

import { CommentsService } from './comments.service';
import { HttpClientModule } from '@angular/common/http';
import "jasmine";
import * as moment from 'moment';
import Comment from '../models/comment';

describe('CommentsService', () => {

    let commentsService: CommentsService;

    beforeAll(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CommentsService]
        });
        commentsService = TestBed.get(CommentsService);
    });

    it('should get comments from server post id=1 with more than 1 elements', (done) => {
        commentsService.listByPostId(1).toPromise().then((res) => {
            expect(res.length).toBeGreaterThan(0);
            expect(res[0].postId).toEqual(1);
            done();
        });
    });

    it('should create a comment for the post id=1 from server', (done) => {
        commentsService.createByPostId(1, {
            id: null,
            parent_id: null,
            postId: 1,
            user: "Jasmine",
            date: moment().format('YYYY[-]MM[-]DD'),
            content: "Jasmine comment"
        }).toPromise().then((res: Comment) => {
            expect(res).not.toBeNull();
            expect(Number(res.postId)).toEqual(1);
            done();
        });
    });

    it('should update comment with id=1', (done) => {
        commentsService.update(1, {
            id: 1,
            parent_id: null,
            postId: 1,
            user: "Jasmine",
            date: moment().format('YYYY[-]MM[-]DD'),
            content: "Updated"
        }).toPromise().then((res) => {
            expect(res).not.toBeNull();
            expect(res.content).toEqual("Updated");
            done();
        });
    });
});
