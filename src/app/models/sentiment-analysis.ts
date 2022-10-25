export interface SentimentAnalysis {
  timestamp: string,
  time: number,
  sentiment: Sentiment
}

export interface Sentiment {
  score: number,
  type: string
}
