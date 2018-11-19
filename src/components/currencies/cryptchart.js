import React, { Component } from 'react'
import { Line, Pie, Bar, Doughnut, Polar, Radar } from 'react-chartjs-2'

export default class AChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        labels: this.props.labels,
        datasets: [
          {
            label: ' Crypto currencies change last 7 days',
            data: this.props.data,

            backgroundColor: [
              '#56ac88',
              '#669ae1',
              '#fc913a',
              '#d35400',
              '#7f8c8d',
            ],
            borderColor: 'rgba(134,159,152, .1)',
            hoverBackgroundColor: 'rgba(230, 236, 235, 0.75)',
            hoverBorderColor: 'rgba(230, 236, 235, 0.75)',
          },
        ],
      },
    }
  }

  generateColors() {
    let colors = []
    const arrayColors = [
      '255, 231, 151',
      '255, 167, 40',
      '242, 218, 254',
      '146, 101, 194',
      '220, 220, 170',
      '206, 120, 255',
      '71, 160, 220',
      '218, 255, 0',
      '91, 200, 84',
      '255, 194, 193',
      '255, 66, 68',
      '217, 129, 80',
    ]

    for (let i = 0, countColors = arrayColors.length; i < countColors; i++) {
      const rgb = arrayColors[i]
      colors.push({
        fill: 'false',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(' + rgb + ',1)',
        pointBackgroundColor: 'rgba(' + rgb + ',1)',
        pointHoverBackgroundColor: 'rgba(' + rgb + ',0.8)',
        pointBorderColor: '#fff',
        pointHoverBorderColor: 'rgba(' + rgb + ',1)',
      })
    }
    return colors
  }

  render() {
    let cur = { ...this.state }
    cur.options.labels = this.props.labels
    cur.options.datasets[0].data = this.props.data

    return (
      <div className="border-1 cspan">
        <div className="chart">
          <div className="d200 boxshadow">
            <Bar data={cur.options} redraw />
          </div>
          <div className="d200 boxshadow">
            <Doughnut data={cur.options} redraw />
          </div>
        </div>
      </div>
    )
  }
}
