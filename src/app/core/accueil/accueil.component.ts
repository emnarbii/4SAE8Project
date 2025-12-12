import { Component } from '@angular/core';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  providers:[SuggestionService]
})
export class AccueilComponent {

}
