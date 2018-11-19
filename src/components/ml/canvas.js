import React from 'react'
//import mnist from 'mnist';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.imgdigit != nextProps.imgdigit
  }

  componentDidUpdate(prevProps) {
    if (this.props.imgdigit) {
      this.draw_digit()
    }
  }

  componentDidMount() {
    this.draw_digit()
  }

  draw_digit() {
    const mnist = this.props.mnist
    const digit = this.props.imgdigit
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    mnist.draw(digit, ctx)
  }
  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    )
  }
}
