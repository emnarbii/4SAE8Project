import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css',
})
export class SuggestionDetailsComponent {
  id!: number;
  suggestion!: Suggestion;

  constructor(private actRoute: ActivatedRoute, private data:SuggestionService) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    // get Id from URL
    this.actRoute.paramMap.subscribe(param=>this.id= Number(param.get('id')))
    this.data.getById(this.id).subscribe(item=>{this.suggestion=item.suggestion,console.log(item)})

   
  }
}
