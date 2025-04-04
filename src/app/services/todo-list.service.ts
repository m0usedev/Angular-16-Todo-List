import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root' // esto es para que este para todos los componenetes
}*/)
export class TodoListService {
  private tasks : string[] = [];
  private taksSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.tasks);
  public tasks$: Observable<string[]> = this.taksSubject.asObservable();

  addTask(task: string): void {
    this.tasks.push(task);
    this.taksSubject.next([... this.tasks]);
  }

  delTask(index: number): void {
    this.tasks.splice(index, 1);
    this.taksSubject.next([... this.tasks]);
  }
}
