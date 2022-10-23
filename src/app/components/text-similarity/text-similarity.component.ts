import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string = '';
  text2: string = '';
  similarity: number = -1;

  constructor(private textSimilarityService: TextSimilarityService) { }

  ngOnInit(): void {
  }

  compareTexts() {
    this.textSimilarityService.getTextSimilarity(this.text1, this.text2).subscribe((textSimilarity) => {
      this.similarity = textSimilarity.similarity;
    })
  }

  hasText1(): boolean {
    return this.text1.length == 0;
  }

  hasText2(): boolean {
    return this.text2.length == 0;
  }

}
