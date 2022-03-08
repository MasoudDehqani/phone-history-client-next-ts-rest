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
  price_range: 1 | 2 | 3 | 4 | 5 
}

export type ReviewType = {
  review_id: string,
  rate: number,
  review_text: string
}

export enum CrudMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT"
}