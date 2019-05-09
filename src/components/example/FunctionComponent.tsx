import * as React from 'react'

interface Props {
  count: number
}

const Count: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <p>
        This is props Count:
        <span>{props.count}</span>
      </p>
    </div>
  )
}

export default Count
