export interface Car {
  id: number
  name: string
  segment: string
  year: number
  price: number
  thumbnail: string
  photo: string
}

interface ModelFeature {
  name: string
  description: string
  image: string
}

interface ModelHighlights {
  title: string
  content: string
  image: string
}

export interface CarDetail extends Car {
  title: string
  description: string
  model_features: ModelFeature[]
  model_highlights: ModelHighlights[]
}

export interface OrderFilterType {
  field?: "price" | "year";
  order?: "asc" | "desc";
}
