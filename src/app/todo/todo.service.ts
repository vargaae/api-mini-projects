import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ITodo {
  _id?: string;
  title: string;
  isDone: boolean;
  notes: string;
  update_at: string;
  editing ?: boolean;
}

const API = '/api/todos';

let TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) { }

   // // TODO APP using RestAPI:
  // get(params = {}) {
  //   return this.http.get(API, { params });
  // }

  // add(data: ITodo) {
  //   return this.http.post(API, data);
  // }

  // put(changed: ITodo) {
  //   return this.http.put(`${API}/${changed._id}`, changed);
  // }

  // delete(selected: ITodo) {
  //   return this.http.delete(`${API}/${selected._id}`);
  // }

  // deleteCompleted(body = { isDone: true }) {
  //   return this.http.request('delete', `${API}`, { body });
  // }

  // toggle(selected: ITodo) {
  //   selected.isDone = !selected.isDone;
  //   return this.put(selected);
  // }

  // TODO APP without RestAPI:

  get(query = '') {
    return new Promise((resolve) => {
      let data;

      if (query === 'completed' || query === 'active') {
        const isCompleted = query === 'completed';
        data = TODOS.filter((todo) => todo.isDone === isCompleted);
      } else {
        data = TODOS;
      }

      resolve(data);
    });
  }

  add(data) {
    return new Promise((resolve) => {
      TODOS.push(data);
      resolve(data);
    });
  }

  put(changed) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    });
  }

  delete(selected) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo === selected);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }

  deleteCompleted() {
    return new Promise(resolve => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      resolve(TODOS);
    });
  }

  toggle(selected) {
    selected.isDone = !selected.isDone;
    return Promise.resolve();
  }
}
