import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {Color} from "../../models/color";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = "";
  lang: string = "en";

  score: number | undefined;
  type: string | undefined;

  colorGreen: Color = {
    r: 0,
    g: 255,
    b: 0
  };
  colorRed: Color = {
    r: 255,
    g: 0,
    b: 0
  };
  colorType: Color = {
    r: 0,
    g: 0,
    b: 0
  }

  constructor(private sentimentAnalysisService: SentimentAnalysisService) { }

  ngOnInit(): void {
  }

  getAnalysis() {
    this.sentimentAnalysisService.getSentimentAnalysis(this.text, this.lang).subscribe((analysis) => {
      this.score = analysis.sentiment.score;
      this.type = analysis.sentiment.type;

      // (score - lowerB) / (upperB - lowerB)
      let lowerB = -1;
      let upperB = 1;
      let normalizedScore = (this.score - lowerB) / (upperB - lowerB);

      this.colorType = {
        r: this.colorRed.r + (this.colorGreen.r - this.colorRed.r) * normalizedScore,
        g: this.colorRed.g + (this.colorGreen.g - this.colorRed.g) * normalizedScore,
        b: this.colorRed.b + (this.colorGreen.b - this.colorRed.b) * normalizedScore
      }

    })
  }

  hasText(): boolean {
    return this.text.length == 0;
  }

  getColorCode(): string {
    return "rgb(" + this.colorType.r + ", " + this.colorType.g + ", " + this.colorType.b + ")";
  }

}
