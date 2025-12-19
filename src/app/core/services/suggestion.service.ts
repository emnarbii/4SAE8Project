import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  constructor(private _http: HttpClient) {}

  suggestionUrl = 'http://localhost:3000/suggestions';

  //get all suggestions service from backend
  getList() {
    return this._http.get<Suggestion[]>(this.suggestionUrl);
  }

  // get suggestion by Id
  getById(id: number) {
    return this._http.get<{suggestion:Suggestion}>(this.suggestionUrl + '/' + id);
  }

  // add new suggestion
  add(sugg: Suggestion) {
    return this._http.post<Suggestion>(this.suggestionUrl, sugg);
  }

  //update suggestion
  update(id: number, sugg: Suggestion) {
    return this._http.put<Suggestion>(this.suggestionUrl + '/' + id, sugg);
  }

  // delete suggestion by Id
  delete(id: number) {
    return this._http.delete<Suggestion>(this.suggestionUrl + '/' + id);
  }
}
