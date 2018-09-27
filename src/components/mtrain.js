import React from 'react'
import * as tf from '@tensorflow/tfjs'
import { Bar, Line, Pie } from 'react-chartjs-2'
import '../layouts/msite.module.css'

export default class Train extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      metrics: {},
      modelElement: null,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [],
          },
        ],
      },
    }
  }

  // Initialize the child model and create trainer after model is compiled.
  componentDidMount() {
    const modelElement = React.Children.only(this.props.children)
    console.log('MElement... --> ', modelElement)
  }

  render() {
    if (!this.props.display) {
      return this.state.modelElement
    }

    const metricElems = Object.keys(this.state.metrics).map(metric => {
      const values = this.state.metrics[metric]
      console.log('values', values)

      this.setState(state => {
        state.chartData.datasets[0].data = values
        state.chartData.labels = Object.keys(values).map(i => parseInt(i, 10))
        return state
      })

      const ldata = this.state.chartData
      return (
        <div className="d200">
          <Line data={ldata} />
        </div>
      )
    })

    return (
      <div>
        <h1> Loss Function </h1>
        {metricElems}
        {this.state.modelElement}
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps) {}

  async *_train(model) {
    const {
      trainData,
      samples,
      validationData,
      epochs,
      batchSize,
      display,
    } = this.props
  }
}
