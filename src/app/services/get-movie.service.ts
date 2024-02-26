import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_PATH, API_SEARCH, API_IMG } from '../../environments/environments.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  constructor(private httpClient: HttpClient) { }

  imageUrl: string = API_IMG;

  topRated(): Observable<any>{
    return this.httpClient.get<any>(`${API_PATH}top_rated?${API_KEY}`)
  }

  giveMovieCard(){

  }
}
