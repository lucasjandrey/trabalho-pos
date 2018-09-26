import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  professor: any;
  constructor(private http: HttpClient) { }

  getUrl(url) {
     return this.http.get(url);
  }
}