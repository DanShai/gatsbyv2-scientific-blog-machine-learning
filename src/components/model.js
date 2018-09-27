import React from 'react';
import * as tf from '@tensorflow/tfjs';

export default class Model extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return null;
  }

  parseLayerElement(element) {
    //console.log(element.props.lname)
    switch (element.props.lname) {
    case "Conv2D":
      return tf.layers.conv2d(element.props);
    case "Dense":
      return tf.layers.dense(element.props);
    case "Flatten":
      return tf.layers.flatten(element.props);
    case "MaxPooling2D":
      return tf.layers.maxPooling2d(element.props);
    default:
      throw new Error('Invalid Layer', element);
    }
  }
  

  _compile() {
    const {
      children,
      optimizer,
      loss,
      metrics,
      onCompile,
    } = this.props;

    const layers = React.Children.toArray(children);
    //console.log( layers )

    const model = tf.sequential();
    layers.map(child => {
      if(child) { 
        model.add(this.parseLayerElement(child))
       }
       else{ console.log("No fuking layer...")}
    })


    model.compile({
      optimizer,
      loss,
      metrics,
    });

    if (typeof onCompile === 'function') {
      onCompile(model);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props != prevProps)
      this._compile();
  }

  componentDidMount() {
    this._compile();
  }
}

