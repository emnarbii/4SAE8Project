import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { FormsModule } from '@angular/forms';
import { FormatDatePipe } from '../../shared/Pipes/formater-date.pipe';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';

@NgModule({
  declarations: [SuggestionsComponent,ListSuggestionComponent, FormatDatePipe, SuggestionDetailsComponent],
  imports: [CommonModule, SuggestionsRoutingModule, FormsModule],
})
export class SuggestionsModule {}
