import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {EntityExtraction} from "../models/entity-extraction";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly entityExtractionApi = environment.entityExtractionApi;

  constructor(private httpClient: HttpClient) { }


  getEntityExtractions(text: string, minConfidence: number, args: string[]): Observable<EntityExtraction> {
    let url: string = this.entityExtractionApi + "/?text=" + text + "&min_confidence=" + minConfidence;

    if(args.length > 0) {
      url += "&include="
      while (args.length > 1) {
        url += args.pop() + ",";
      }
      url += args.pop();
    }

    url += "&token=" + localStorage.getItem("token");

    return this.httpClient.get<EntityExtraction>(url);
  }

}
