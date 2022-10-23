import { Component, OnInit } from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";
import {DetectedLanguage} from "../../models/language-detection";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = "";
  clean: boolean = false;

  detectedLanguages: DetectedLanguage[] = []

  constructor(private languageDetectionService: LanguageDetectionService) { }

  ngOnInit(): void {
  }

  detectText() {
    this.languageDetectionService.getDetectedLanguage(this.text, this.clean).subscribe((ld) => {
      this.detectedLanguages = ld.detectedLangs;
    })
  }

  hasText(): boolean {
    return this.text.length == 0;
  }

}
