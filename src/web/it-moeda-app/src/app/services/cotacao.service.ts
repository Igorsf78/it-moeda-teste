import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  url = 'https://localhost:5001/api/Cotacao';
  urlConversoes = 'https://localhost:5001/api/Cotacao/conversions';
  urlCotacao = 'https://localhost:5001/api/Cotacao/compra';

  opts = <any>[];

  constructor(private http: HttpClient) { }

  getMoedas() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get(`${this.url}/currencys`).pipe(tap(data => {
        this.opts = data;
      }))
  }
}
