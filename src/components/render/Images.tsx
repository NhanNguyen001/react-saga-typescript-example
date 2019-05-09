import * as React from 'react'

export default (props: any) => {
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
