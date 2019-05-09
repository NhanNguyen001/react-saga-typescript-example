// eslint-disable-next-line
import * as TYPE from '../_constant'
// import { Text, FetchTextTypes } from "../_interface";

// const text: Text | object = {};
const stateDefault = {
  current: '',
  images: []
}

export default (state = stateDefault, action: any) => {
  switch (action.type) {
    case TYPE.TEXT_SUCCESS: {
      state = action.payload
      return action.payload
    }
    case TYPE.TEXT_FAIL: {
      state = action.payload
      return action.payload
    }
    default:
      return state
  }
}

export const fetchTextAction = (quantity: number): any => {
  const textArr: string[] = ['heheheh']
  return {
    type: TYPE.TEXT_SUCCESS,
    payload: {
      quantity,
      text: textArr
    }
  }
}
