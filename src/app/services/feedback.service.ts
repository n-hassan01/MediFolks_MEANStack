import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  postFeedback(data: any){
    return this.http.post<any>('http://localhost:3000/feedback/', data);
  }
}
