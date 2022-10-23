export interface LanguageDetection {
  timestamp: string,
  time: number,
  detectedLangs: DetectedLanguage[]
}

export interface DetectedLanguage {
  lang: string,
  confidence: number
}
