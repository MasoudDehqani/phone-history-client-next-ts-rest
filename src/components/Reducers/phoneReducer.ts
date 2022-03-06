import type { PhoneType } from '../../utils/types'


export enum PhoneStateActions {
  DELETE = "DELETE",
  ADD = "ADD"
}

interface AddActionType {
  type: PhoneStateActions,
  payload: {
    id: string
  }
}

interface DeleteActionType {
  type: PhoneStateActions,
  payload:  {
    brand: string,
    model: string,
    priceRange: 1 | 2 | 3 | 4 | 5
  }
}

type ActionType = AddActionType & DeleteActionType

export default function phoneReducer(state: PhoneType[], action: ActionType): PhoneType[] {
  switch (action.type) {
    case "ADD": {
      return [...state, { id: action.payload.id, brand: action.payload.brand, model: action.payload.model, price_range: action.payload.priceRange }]
    };
    case "DELETE": {
      return state.filter(({ id }) => id !== action.payload.id)
    };
    default: {
      return []
    }
  }
}