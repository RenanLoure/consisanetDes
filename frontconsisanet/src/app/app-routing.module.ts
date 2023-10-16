import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';

const routes: Routes = [
  { path: 'lista-tarefas', component: ListaTarefasComponent },
  { path: 'tarefa-form', component: TarefaFormComponent },
  { path: '', redirectTo: '/lista-tarefas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
