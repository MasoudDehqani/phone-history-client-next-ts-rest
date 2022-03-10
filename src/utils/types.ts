export type PhonesDataType = {
  status: string,
  data: {
    phones: PhoneType[]
  }
}

export type ReviewsDataType = {
  status: string,
  data: {
    reviews: any
  }
}

export type PhoneType = {
  id: string,
  brand: string,
  model: string,
  price_range: 1 | 2 | 3 | 4 | 5,
  avg_rate: number | null,
  reviews_count: number
}

export type ReviewType = {
  review_id: string,
  rate: number,
  review_text: string
}

export interface PhoneReviewType {
  brand: string,
  model: string,
  review_id: string,
  rate: number,
  review_text: string
}

export interface PhoneReviewDataType {
  brand: string,
  model: string,
  noReview: boolean,
  reviews: PhoneReviewType[]
}

export enum CrudMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT"
}