import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LanguageDetection} from "../models/language-detection";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly languageDetectionApi = environment.languageDetectionApi;

  constructor(private httpClient: HttpClient) { }

  getDetectedLanguage(text: string, clean: boolean): Observable<LanguageDetection> {
    let url: string = this.languageDetectionApi + "/?text=" + text;
    if (clean){
      url += "&clean=true"
    }
    url += "&token=" + localStorage.getItem("token");

    return this.httpClient.get<LanguageDetection>(url);
  }

}
