import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa.model'; // Certifique-se de importar a classe Tarefa ou um modelo similar

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private baseUrl = 'URL_DO_SEU_BACKEND/api/tarefas'; // Substitua pela URL real do seu backend

  constructor(private http: HttpClient) {}

  criarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa);
  }

  atualizarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.baseUrl}/${tarefa.id}`;
    return this.http.put<Tarefa>(url, tarefa);
  }

  deletarTarefa(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  filtrarTarefas(dataInicio: string, dataFim: string, atrasadas: boolean): Observable<Tarefa[]> {
    let params = new HttpParams();
    if (dataInicio) {
      params = params.set('dataInicio', dataInicio);
    }
    if (dataFim) {
      params = params.set('dataFim', dataFim);
    }
    if (atrasadas) {
      params = params.set('atrasadas', 'true');
    }

    return this.http.get<Tarefa[]>(this.baseUrl, { params: params });
  }
}
