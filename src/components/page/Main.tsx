import * as React from 'react'
import { connect } from 'react-redux'
import * as TYPE from '../../_constant'
import ImgLazy from '../render/Images'
import { StateImagesTypes } from '../../_interface'

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

const Main: React.FunctionComponent<any> = (props: Props) => {
  function handlDrag(e: any) {
    console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`)
  }
  return (
    <div className="App">
      <h1>Redux Saga using typeScript basic syntax </h1>
      <button onClick={() => props.fetchImage()}>Add Image</button>
      <div className="list-image">
        <React.Suspense fallback={<div>Loading Component…</div>}>
          {props.images.data.map((img: any, i: number) => (
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