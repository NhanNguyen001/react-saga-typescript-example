import * as React from 'react'

interface Props {}
interface State {
  count: number
}

export default class ClassComponent extends React.Component<Props, State> {
  state: State = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <p>
          This is Class component: <span>{this.state.count}</span>
        </p>
        <button onClick={this.increment}>increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    )
  }
}
