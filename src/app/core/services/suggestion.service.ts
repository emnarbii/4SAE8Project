import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  private apiUrl = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) {}

  /**
   * Convert date string to Date object
   */
  private mapSuggestion(suggestion: any): Suggestion {
    return {
      ...suggestion,
      date: new Date(suggestion.date),
    };
  }

  /**
   * Get all suggestions
   * @returns Observable<Suggestion[]>
   */
  getAll(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.apiUrl);
  }

  /**
   * Get a suggestion by ID
   * @param id - The ID of the suggestion
   * @returns Observable<Suggestion>
   */
  getById(id: number): Observable<Suggestion> {
    return this.http.get<Suggestion>(`${this.apiUrl}/${id}`);
  }

  /**
   * Create a new suggestion
   * @param suggestion - The suggestion data to create
   * @returns Observable<Suggestion>
   */
  create(suggestion: Partial<Suggestion>): Observable<Suggestion> {
    // const suggestionData = {
    //   ...suggestion,
    //   date: suggestion.date
    //     ? suggestion.date.toISOString()
    //     : new Date().toISOString(),
    // };
    return this.http.post<Suggestion>(
      this.apiUrl,
      suggestion
      // this.httpOptions
    );
  }

  /**
   * Update an existing suggestion
   * @param id - The ID of the suggestion to update
   * @param suggestion - The updated suggestion data
   * @returns Observable<Suggestion>
   */
  update(id: number, suggestion: Partial<Suggestion>): Observable<Suggestion> {
    const updateData: any = { ...suggestion };
    if (suggestion.date) {
      updateData.date = suggestion.date.toISOString();
    }
    return this.http.put<Suggestion>(`${this.apiUrl}/${id}`, updateData);
  }

  /**
   * Delete a suggestion
   * @param id - The ID of the suggestion to delete
   * @returns Observable<void>
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Filter suggestions by search term
   * @param searchTerm - The search term to filter by
   * @returns Observable<Suggestion[]>
   */
  filter(searchTerm: string): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(
      `${this.apiUrl}/search/${encodeURIComponent(searchTerm)}`
    );
  }

  /**
   * Like a suggestion (increment nbLikes)
   * @param id - The ID of the suggestion to like
   * @returns Observable<Suggestion>
   */
  like(id: number): Observable<Suggestion> {
    return this.http.patch<Suggestion>(`${this.apiUrl}/${id}/like`, {});
  }
}
