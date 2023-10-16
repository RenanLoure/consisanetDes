import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaFormComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
