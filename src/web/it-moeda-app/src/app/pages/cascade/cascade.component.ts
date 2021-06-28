import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FiltroRelatorio } from 'src/app/Models/FiltroRelatorio';
import { CascadeService } from 'src/app/services/cascade.service';

@Component({
  selector: 'app-cascade',
  templateUrl: './cascade.component.html',
  styleUrls: ['./cascade.component.scss']
})
export class CascadeComponent implements OnInit {
  cascadeForm: FormGroup;
  private dateYesterday: Date = new Date();
  allDiretorias: Observable<any[]>;
  allSuperintendencias: Observable<any[]>;
  diretoria: string;
  allGerencias: Observable<any[]>;
  superintendencia: string;
  allCoordenacoes: Observable<any[]>;
  gerencia: string;
  coordenacao: string;
  allUsuarios: Observable<any[]>;
  usuario: string;
  filtro: FiltroRelatorio;
  formResult: string = '';

  selectedValue: string;

  isMale = true;
  isFeMale = false;
  dataSaved = false;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['select', 'FirstName', 'LastName', 'DateofBirth', 'EmailId', 'Gender', 'Country', 'State', 'City', 'Address', 'Pincode', 'Edit', 'Delete'];


  constructor(private fb: FormBuilder, private cascadeService: CascadeService) { }

  ngOnInit(): void {
    this.clearForm();
    this.FillDiretoriaDDL();
  }

  onFormSubmit() {
    this.filtro = {
      Usuario: this.usuario,
      Diretoria: this.diretoria,
      Superintendencia: this.superintendencia,
      Gerencia: this.gerencia,
      Coordenacao: this.coordenacao,
      DataContabilInicio: this.cascadeForm.controls['dataContabilInicio'].value,
      DataContabilFim: this.cascadeForm.controls['dataContabilFim'].value,
      DataEmissaoInicio: this.cascadeForm.controls['dataEmissaoInicio'].value,
      DataEmissaoFim: this.cascadeForm.controls['dataEmissaoFim'].value,
    }

    this.cascadeService.download(this.filtro).subscribe((data) => {
      this.downloadFile(data)
    },
      error => alert(`Nenhum registro localizado para essa pesquisa - ${error.status}`));

    this.cascadeForm.reset();
    this.diretoria = this.superintendencia = this.gerencia =
      this.coordenacao = this.usuario = null;
    this.clearForm();
  }

  private downloadFile(data: any) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  FillDiretoriaDDL() {
    this.allDiretorias = this.cascadeService.getDiretorias();
    this.allSuperintendencias = this.superintendencia = this.allGerencias = this.gerencia =
      this.allCoordenacoes = this.coordenacao = this.allUsuarios = this.usuario = null;
  }

  SetInitialValue(field, value) {
    this.cascadeForm.controls[field].setValue(value);
    this[field] = '';
  }

  FillSuperintendencia(diretoria) {
    this.allSuperintendencias = this.cascadeService
      .getSuperintendencias(diretoria.value);
    this.diretoria = diretoria.value;
    this.allGerencias = this.gerencia = this.allCoordenacoes =
      this.coordenacao = this.allUsuarios = this.usuario = null;
  }

  FillGerencias(superintendencia) {
    this.allGerencias = this.cascadeService
      .getGerencias(this.diretoria, superintendencia.value);
    this.superintendencia = superintendencia.value;
    this.allCoordenacoes = this.coordenacao = this.allUsuarios = this.usuario = null;
  }

  FillCoordenacoes(gerencia) {
    this.allCoordenacoes = this.cascadeService
      .getCoordenacoes(this.diretoria, this.superintendencia, gerencia.value);
    this.gerencia = gerencia.value;
    this.allUsuarios = this.usuario = null
  }

  FillUsuarios(coordenacao) {
    this.allUsuarios = this.cascadeService
      .getUsuarios(this.diretoria
        , this.superintendencia
        , this.gerencia
        , coordenacao.value
      );
    this.coordenacao = coordenacao.value;
  }

  GetSelectedUsuario(usuario) {
    this.usuario = usuario.value;
  }

  clearForm() {
    this.dateYesterday = new Date();
    this.dateYesterday = new Date(this.dateYesterday.setDate(this.dateYesterday.getDate() - 1));
    this.cascadeForm = this.fb.group({
      diretoria: ['', [Validators.required]],
      superintendencia: ['', [Validators.required]],
      gerencia: ['', [Validators.required]],
      coordenacao: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      dataContabilInicio: new FormControl(this.dateYesterday, Validators.required ),
      dataContabilFim: new FormControl(this.dateYesterday, Validators.required ),
      dataEmissaoInicio: new FormControl(this.dateYesterday, Validators.required ),
      dataEmissaoFim: new FormControl(this.dateYesterday, Validators.required ),
    });
  }

}
