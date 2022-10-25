import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SentimentAnalysis} from "../models/sentiment-analysis";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly sentimentAnalysisApi = environment.sentimentAnalysisApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getSentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysis> {
    let url: string = this.sentimentAnalysisApi + "/?lang=" + lang + "&text=" + text + "&token=" + localStorage.getItem("token");

    this.historyService.addHistory(url, new Date());
    return this.httpClient.get<SentimentAnalysis>(url);
  }

}
