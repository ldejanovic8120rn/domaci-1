import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SentimentAnalysis} from "../models/sentiment-analysis";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly sentimentAnalysisApi = environment.sentimentAnalysisApi;

  constructor(private httpClient: HttpClient) { }

  getSentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysis> {
    let url: string = this.sentimentAnalysisApi + "/?lang=" + lang + "&text=" + text + "&token=" + localStorage.getItem("token");

    return this.httpClient.get<SentimentAnalysis>(url);
  }

}
