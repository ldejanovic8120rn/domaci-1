export interface EntityExtraction {
  timestamp: string,
  time: number,
  lang: string,
  annotations: Entity[]
}

export interface Entity {
  title: string,
  label: string,
  confidence: number,
  spot: string,
  categories: string[]
  abstract: string,
  image: Image
}

export interface Image {
  full: string,
  thumbnail: string
}
