import * as React from 'react'
import { connect } from 'react-redux'
import * as TYPE from '../../_constant'
import { StateImagesTypes, ImagesTypes } from '../../_interface'
const ImgLazy = React.lazy((): any => import('../render/Images'))

interface Props {
  images: StateImagesTypes
  fetchImage(): void | undefined
}
interface MapState {
  images: StateImagesTypes
}
interface MapDispatchFunc {
  (params: { type: typeof TYPE.FETCH_IMAGES }): void
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  function handlDrag(e: any) {
    console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`)
  }
  return (
    <div className="App">
      <h1>Redux Saga using typeScript basic syntax </h1>
      <button className="btn btn-primary" onClick={() => props.fetchImage()}>
        Add Image
      </button>
      <div className="list-image">
        <React.Suspense fallback={<div>Loading Component…</div>}>
          {props.images.data.map((img: ImagesTypes, i: number) => (
            <span key={i} draggable={true} onDrag={e => handlDrag(e)}>
              {<ImgLazy img={img} key={img.id} />}
            </span>
          ))}
        </React.Suspense>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any): MapState => ({
  images: state.images
})

const mapDispatchToProps = (dispatch: MapDispatchFunc) => ({
  fetchImage: (): void => {
    dispatch({ type: TYPE.FETCH_IMAGES })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
