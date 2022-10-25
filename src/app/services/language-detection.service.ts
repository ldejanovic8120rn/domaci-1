import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LanguageDetection} from "../models/language-detection";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly languageDetectionApi = environment.languageDetectionApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getDetectedLanguage(text: string, clean: boolean): Observable<LanguageDetection> {
    let url: string = this.languageDetectionApi + "/?text=" + text;
    if (clean){
      url += "&clean=true"
    }
    url += "&token=" + localStorage.getItem("token");

    this.historyService.addHistory(url, new Date());
    return this.httpClient.get<LanguageDetection>(url);
  }

}
