import * as TYPE from './_constant'

export interface ImagesTypes {
  albumId: number
  id: number
  isLoading?: boolean
  thumbnailUrl: string
  title: string
  url: string
}

export interface StateImagesTypes {
  current: string
  data: ImagesTypes[]
}

export interface FetchLoadingImagesLoadingTypes {
  type: typeof TYPE.LOADING_STATUS
  payload: ImagesTypes
}

export interface FetchLoadingImagesSuccessTypes {
  type: typeof TYPE.SUCCESS
  payload: ImagesTypes
}

export interface FetchLoadingImagesFailTypes {
  type: typeof TYPE.FAIL
  payload: null
}

export type FetchImagesTypes =
  | FetchLoadingImagesLoadingTypes
  | FetchLoadingImagesFailTypes
  | FetchLoadingImagesSuccessTypes
