import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostBlogService } from 'src/app/services/post-blog.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {

  blogForm!: FormGroup;

  constructor(
    private blog: PostBlogService, 
    private formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<BlogDialogComponent>
    ) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title : ['',Validators.required],
      content : ['',Validators.required],
    })
  }

  onPost(){
    if(this.blogForm.valid){
      this.blog.postBlog(this.blogForm.value)
      .subscribe({
        next: (res) => {
          alert('Congratulation');
          
          this.blogForm.reset();
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert('error!');
        }
      })
    }
  }

}
