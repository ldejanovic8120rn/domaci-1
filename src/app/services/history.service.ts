import { Injectable } from '@angular/core';
import {History} from "../models/history";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private allHistory: History[] = [];

  constructor() { }

  addHistory(url: string, date: Date) {
    this.allHistory.push(new History(url, date));
  }

  getHistory(): History[] {
    return this.allHistory;
  }

}
