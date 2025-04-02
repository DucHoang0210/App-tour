import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tour} from '../models/tour';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private baseUrl="http://localhost:8080/api/tour";
  constructor(private httpClient : HttpClient) { }

  getAllTours(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(`${this.baseUrl}/viewTour`);
  }


}
