import { faEnvelope, faHouse, faRightToBracket, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  faRightToBracket = faSquarePhone;
  faEmail = faEnvelope;
  faHouse = faHouse;

  feedbackForm!: FormGroup; 

  constructor(private feedback: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      actor: new FormControl('', [Validators.required]),
      feedback: new FormControl('', [Validators.required])
    })
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  onClick(){
    if(this.feedbackForm.valid){
      this.feedback.postFeedback(this.feedbackForm.value)
      .subscribe({
        next: (res) => {
          alert('Thank you!');
          
          this.feedbackForm.reset();
          // this.dialogRef.close('save');
        },
        error: (err) => {
          alert('Error! Try again');
        }
      })
    }
    this.feedback.postFeedback(this.feedbackForm.value);
  }
}
