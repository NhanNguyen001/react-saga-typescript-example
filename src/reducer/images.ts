import * as TYPE from '../_constant'
import { StateImagesTypes } from '../_interface'

const stateDefault: StateImagesTypes = {
  current: '',
  data: []
}

export default (state: StateImagesTypes = stateDefault, action: any) => {
  switch (action.type) {
    case TYPE.LOADING_STATUS: {
      console.log(action.payload)
      const updateImage: any = state.data.find(
        (image: any) =>
          image.id === action.payload.id &&
          image.albumId === action.payload.albumId
      )
      updateImage.isLoading = false
      return {
        ...state
      }
    }
    case TYPE.SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case TYPE.FAIL:
      return action.data
    default:
      return state
  }
}
