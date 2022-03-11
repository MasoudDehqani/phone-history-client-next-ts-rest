import type { PhoneType } from '../../utils/types'

type PriceRangeType = 1 | 2 | 3 | 4 | 5 

export enum PhoneStateActions {
  DELETE = "DELETE",
  ADD = "ADD",
  FILL = "FILL"
}

interface AddPayloadType {
  id: string,
  brand: string,
  model: string,
  price_range: PriceRangeType,
  reviews_count: number
}

interface DeletePayloadType {
  id: string,
}

type FillPayloadType = {
  id: string,
  brand: string,
  model: string,
  price_range: PriceRangeType,
  avg_rate: number | null,
  reviews_count: number
}[]


interface ActionType {
  type: PhoneStateActions,
  payload: {
    dataToAdd?: AddPayloadType,
    idToDelete?: DeletePayloadType,
    arrayToFill?: FillPayloadType
  }
}


export default function phoneReducer(state: PhoneType[], action: ActionType): PhoneType[] {
  switch (action.type) {
    case PhoneStateActions.ADD: {
      if (action.payload.dataToAdd) {
        const { id, brand, model, price_range, reviews_count } = action.payload.dataToAdd;
        return [...state, { id, brand, model, price_range, avg_rate: null, reviews_count }]
      }
      return []
    };
    case PhoneStateActions.DELETE: {
      return state.filter(({ id }) => {
        if (action.payload.idToDelete) return id !== action.payload.idToDelete.id
        return false
      })
    };
    case PhoneStateActions.FILL: {
      if (action.payload.arrayToFill) return action.payload.arrayToFill
      return []
    };
    default: {
      return []
    }
  }
}