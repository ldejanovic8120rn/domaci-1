import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextSimilarity} from "../models/text-similarity";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly textSimilarityApi = environment.textSimilarityApi;

  constructor(private httpClient: HttpClient) { }

  getTextSimilarity(text1: string, text2: string): Observable<TextSimilarity> {
    let url: string = this.textSimilarityApi + "/?text1=" + text1 + "&text2=" + text2 + "&token=" + localStorage.getItem("token");

    return this.httpClient.get<TextSimilarity>(url);
  }
}
