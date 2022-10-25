import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextSimilarity} from "../models/text-similarity";
import {environment} from "../../environments/environment";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly textSimilarityApi = environment.textSimilarityApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getTextSimilarity(text1: string, text2: string): Observable<TextSimilarity> {
    let url: string = this.textSimilarityApi + "/?text1=" + text1 + "&text2=" + text2 + "&token=" + localStorage.getItem("token");

    this.historyService.addHistory(url, new Date());
    return this.httpClient.get<TextSimilarity>(url);
  }
}
