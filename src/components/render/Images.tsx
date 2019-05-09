import * as React from 'react'
import { ImagesTypes } from '../../_interface'
interface Props {
  img: ImagesTypes
}
export default (props: Props) => {
  const { img } = props
  return (
    <img
      src={
        (!img.isLoading && img.thumbnailUrl) ||
        'https://loading.io/spinners/ripple/index.ripple-radio-preloader.svg'
      }
      width="150"
      alt="nothing..."
    />
  )
}
