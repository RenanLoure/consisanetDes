import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: any[] = [];
  dataInicio: string = '';
  dataFim: string = '';
  atrasadas: boolean = false;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.filtrarTarefas();
  }

  filtrarTarefas() {
    this.tarefaService.filtrarTarefas(this.dataInicio, this.dataFim, this.atrasadas)
      .subscribe(tarefas => {
        this.tarefas = tarefas;
      });
  }
}
