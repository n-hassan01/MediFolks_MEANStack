import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostBlogService {

  constructor(private http: HttpClient) { }

  postBlog(data: any){
    return this.http.post<any>('http://localhost:3000/blogList', data);
  }

  displayBlog(){
    return this.http.get<any>('http://localhost:3000/blogList');
  }
}
