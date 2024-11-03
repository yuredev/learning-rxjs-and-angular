import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type DogResponse = {
  message: string;
  status: string;
};

@Injectable({
  providedIn: 'root',
})
export class CachorroServiceService {
  constructor(private httpClient: HttpClient) {}

  getFotoCachorro(): Observable<DogResponse> {
    const object = this.httpClient.get<DogResponse>(
      'https://dog.ceo/api/breeds/image/random'
    );
    return object;
  }
}
