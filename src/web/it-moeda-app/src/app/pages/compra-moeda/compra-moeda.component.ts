import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CotacaoService } from 'src/app/services/cotacao.service';


@Component({
  selector: 'app-compra-moeda',
  templateUrl: './compra-moeda.component.html',
  styleUrls: ['./compra-moeda.component.scss']
})
export class CompraMoedaComponent implements OnInit {
  myControl = new FormControl();
  options = <any>[];
  filteredOptions: Observable<string[]>;
  constructor(private cotacaoService: CotacaoService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this._filter(val || '')
      })
    )
   }

  ngOnInit(): void { }

  private _filter(value: string): Observable<any[]> {
    const filterValue = value.toLowerCase();
    return this.cotacaoService.getMoedas()
      .pipe(
        map(response => response.filter(option => {
          return option.name.toLowerCase().indexOf(filterValue) === 0
        }))
      )
  }

}
