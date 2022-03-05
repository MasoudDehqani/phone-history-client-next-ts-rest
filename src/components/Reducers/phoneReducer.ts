import type { PhoneType } from '../../utils/types'


export enum PhoneStateActions {
  DELETE = "DELETE"
}

interface ActionType {
  type: PhoneStateActions,
  payload: {
    id: string
  }
}

export default function phoneReducer(state: PhoneType[], action: ActionType): PhoneType[] {
  switch (action.type) {
    case "DELETE": {
      console.log("DELETE")
      console.log(state.filter(({ id }) => id !== action.payload.id))
      console.log(state)
      return state.filter(({ id }) => id !== action.payload.id)
    }
    default: {
      return []
    }
  }
}