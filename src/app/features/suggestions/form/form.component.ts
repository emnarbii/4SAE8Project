import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuggestionService } from '../../../core/services/suggestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  suggForm!: FormGroup;
  constructor(private suggData:SuggestionService, private route:Router) {
    this.suggForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl(new Date(), []),
      status: new FormControl('en attente', []),
      nbLikes: new FormControl('0', []),
    });
  }

  ngOnInit() {
    console.log(this.suggForm.value);
  }


  get title(){
    return this.suggForm.get('title');
  }
  submit() {
    return this.suggData.create(this.suggForm.value).subscribe(()=>this.route.navigate(['./']));
  }
}
