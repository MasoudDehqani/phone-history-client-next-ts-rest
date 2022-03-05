export type Data = {
  status: string,
  data: {
    phones: PhoneType[]
  }
}

export type PhoneType = {
  id: string,
  brand: string,
  model: string,
  price_range: 1 | 2 | 3 | 4 | 5 
}

export enum CrudMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT"
}