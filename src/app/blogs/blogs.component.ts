import { PostBlogService } from 'src/app/services/post-blog.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs$: Observable<any> | undefined;

  constructor(private blog: PostBlogService) { }

  ngOnInit(): void {
    this.blogs$ = this.blog.displayBlog();
  }

}
