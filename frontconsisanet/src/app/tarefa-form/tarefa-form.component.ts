import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent {
  tarefa: Tarefa = new Tarefa();

  constructor(private tarefaService: TarefaService) {}

  salvarTarefa() {
    this.tarefaService.criarTarefa(this.tarefa).subscribe(
      (novaTarefa: Tarefa) => {
        console.log('Tarefa criada com sucesso:', novaTarefa);
        this.tarefa = new Tarefa();
      },
      error => {
        console.error('Erro ao criar a tarefa:', error);
      }
    );
  }

  atualizarTarefa() {
    this.tarefaService.atualizarTarefa(this.tarefa).subscribe(
      (tarefaAtualizada: Tarefa) => {
        console.log('Tarefa atualizada com sucesso:', tarefaAtualizada);
      },
      error => {
        console.error('Erro ao atualizar a tarefa:', error);
      }
    );
  }

  deletarTarefa(id: number) {
    this.tarefaService.deletarTarefa(id).subscribe(
      () => {
        console.log('Tarefa deletada com sucesso');
      },
      error => {
        console.error('Erro ao deletar a tarefa:', error);
      }
    );
  }
}
