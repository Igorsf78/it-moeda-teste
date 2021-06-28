import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltroRelatorio } from '../Models/FiltroRelatorio';

@Injectable({
  providedIn: 'root'
})
export class CascadeService {
  url = 'https://localhost:5001/Api/HistoricaLancamento';

  constructor(private http: HttpClient) { }

  getDiretorias(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/diretorias`);
  }

  getSuperintendencias(diretoria): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/superintendencias/${diretoria}` );
  }

  getGerencias(diretoria, superintendencia): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/gerencias/${diretoria}?superintendencia=${superintendencia}` );
  }

  getCoordenacoes(diretoria, superintendencia, gerencia): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/coordenacoes/${diretoria}?superintendencia=${superintendencia}&gerencia=${gerencia}` );
  }

  getUsuarios(diretoria, superintendencia, gerencia, coordenacao): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/usuarios/${diretoria}?superintendencia=${superintendencia}&gerencia=${gerencia}&coordenacao=${coordenacao}` );
  }

  public download(filtro: FiltroRelatorio) : Observable<Blob> {
    const teste = JSON.stringify(filtro);
    return this.http.get(`${this.url}/excel`, {
      params: new HttpParams().set('filtro' ,teste),
      responseType: 'blob'
    });
}
}
