import { Dispatch } from "react"
import { PhoneStateActions } from "~components/Reducers/phoneReducer"

export default function handleClientSideRequests() {

  return ""
}

export const handleAddPhone = (brand: string, model: string, priceRange: number, dispatch: Dispatch<any>) => {
  const trimmedBrand = brand.trimEnd();
  const trimmedModel = model.trimEnd();
  return async () => {
    const response = await fetch("http://localhost:5001/api/v1/phones", {
      method: "POST",
      body: JSON.stringify({
        trimmedBrand,
        trimmedModel,
        priceRange
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
  
    const { data: { id } } = await response.json()
  
    dispatch({ type: PhoneStateActions.ADD, payload: { dataToAdd: { id, trimmedBrand, trimmedModel, price_range: +priceRange } } })
  }
}
