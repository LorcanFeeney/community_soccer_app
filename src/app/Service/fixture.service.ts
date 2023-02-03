import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fixture } from 'src/app/FixtureModel';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {

  constructor(private http: HttpClient) { }

  getFixtures(): Observable<Fixture[]> {
    return this.http.get<Fixture[]>('http://localhost:8080/api/v1/fixtures/all');
  }
}
