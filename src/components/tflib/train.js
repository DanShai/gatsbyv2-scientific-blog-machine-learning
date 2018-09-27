import React from 'react'
import * as tf from '@tensorflow/tfjs'
import { Bar, Line, Pie } from 'react-chartjs-2'
import '../../assets/css/ml.css'
import PropTypes from 'prop-types'

class Train extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      metrics: {},
      allcharts: {},
      modelElement: null,
    }

    this.trainer = null
    this.dcolors = {
      backgroundColor: 'rgba(252, 145, 58,0.2)',
      borderColor: 'rgba(252, 145, 58,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(252, 145, 58,0.4)',
      hoverBorderColor: 'rgba(252, 145, 58,1)',
    }
  }

  // Initialize the child model and create trainer after model is compiled.
  componentDidMount() {
    const modelElement = React.Children.only(this.props.children)
    const wrappedModelElement = React.cloneElement(modelElement, {
      onCompile: model => {
        this.trainer = this._train(model)
        this.trainer.next()
      },
    })

    this.setState({
      modelElement: wrappedModelElement,
    })
  }

  draw_metrics() {
    const metricElems = Object.keys(this.state.metrics).map(metric => {
      const values = this.state.metrics[metric]
      const ldata = this.state.allcharts[metric]
      return (
        <div key={metric} className="d200 boxshadow">
          <Line data={ldata} />
        </div>
      )
    })

    return metricElems
  }

  render() {
    if (!this.props.display) {
      return this.state.modelElement
    }

    const metricElems = this.draw_metrics()

    return (
      <div>
        <div className="chart">{metricElems}</div>
        {this.state.modelElement}
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      //this.props.display != nextProps.display ||
      this.props.train != nextProps.train ||
      this.state.modelElement != nextState.modelElement ||
      this.state.metrics != nextState.metrics
    )
  }

  componentDidUpdate(prevProps) {
    // Resume training if train state was changed to true
    if (this.props.train && !prevProps.train && this.trainer != null) {
      this.trainer.next()
    }
  }

  async *_train(model) {
    const {
      trainData,
      samples,
      validationData,
      epochs,
      batchSize,
      display,
    } = this.props

    // TODO: Switch to PropTypes
    const onBatchEnd =
      typeof this.props.onBatchEnd === 'function'
        ? this.props.onBatchEnd
        : () => {}
    // maybe done !
    //const onBatchEnd = this.props.onBatchEnd

    for (let epoch = 0; epoch < epochs; epoch++) {
      const trainGenerator = trainData()
      for (let batch = 0; batch * batchSize < samples; batch++) {
        // Pause training when train prop is false
        const train = this.props.train
        if (!train) {
          yield
        }

        const trainBatch = this._getBatch(trainGenerator, batchSize)
        const history = await model.fit(trainBatch.xs, trainBatch.ys, {
          batchSize: trainBatch.xs.shape[0],
          epochs: 1,
        })
        onBatchEnd(history.history, model)
        tf.dispose(trainBatch)

        if (display) {
          const fitMetrics = history.history
          this._pushMetrics(fitMetrics)
          await tf.nextFrame()
        }
      }

      if (validationData) {
        const valGenerator = validationData()
        // Just get all the validation data at once
        const valBatch = this._getBatch(valGenerator, Infinity)
        const valMetrics = model.evaluate(valBatch.xs, valBatch.ys, {
          batchSize,
        })
        const history = {}

        for (let i = 0; i < valMetrics.length; i++) {
          const metric = model.metricsNames[i]
          history[`validation-${metric}`] = await valMetrics[i].data()
        }

        this._pushMetrics(history)

        tf.dispose(valMetrics)
        tf.dispose(valBatch)
      }
    }

    this.props.onTrainEnd(model)
  }

  _getBatch(generator, batchSize = 32) {
    const xs = []
    const ys = []

    for (let i = 0; i < batchSize; i++) {
      const sample = generator.next().value

      if (sample == null) {
        break
      }

      xs.push(sample.x)
      ys.push(sample.y)
    }

    if (xs.length === 0) {
      throw new Error(
        'No data returned from data generator for batch, check sample length'
      )
    }

    // Either stack if it's a generator of tensors, or convert to tensor if
    // it's a generator of JS arrs
    const stack = arr =>
      arr[0] instanceof tf.Tensor ? tf.stack(arr) : tf.tensor(arr)

    return {
      xs: stack(xs),
      ys: stack(ys),
    }
  }

  _pushMetrics(metrics) {
    const updatedMetrics = { ...this.state.metrics }
    Object.keys(metrics).map(metric => {
      if (updatedMetrics[metric] == null) {
        updatedMetrics[metric] = []
      }
      updatedMetrics[metric].push(metrics[metric][0])
      //const values = this.state.metrics[metric];
      const values = updatedMetrics[metric]
      const achart = {
        labels: Object.keys(values).map(i => parseInt(i, 10)),
        datasets: [
          {
            label: metric,
            data: values,
            ...this.dcolors,
          },
        ],
      }

      this.setState(state => {
        state.allcharts[metric] = achart
        return state
      })
    })
    this.setState({
      metrics: updatedMetrics,
    })
  }
}

// Train.propTypes = {
//   onBatchEnd: React.PropTypes.func,
// }

export default Train
