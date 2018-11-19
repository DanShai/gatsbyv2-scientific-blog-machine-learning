import React, { Component } from 'react'
import { Line, Pie, Bar, Doughnut, Polar, Radar } from 'react-chartjs-2'

import '../../assets/css/styles.css'
import '../../assets/css/ml.css'

export default class Mchart extends Component {
  constructor(props) {
    super(props)
    this.linedata = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(220,220,220,0.5)',
          borderColor: 'rgba(220,220,220,0.8)',
          hoverBackgroundColor: 'rgba(220,220,220,0.75)',
          hoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(151,187,205,0.5)',
          borderColor: 'rgba(151,187,205,0.8)',
          hoverBackgroundColor: 'rgba(151,187,205,0.75)',
          hoverBorderColor: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    }

    this.bardata = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(220,220,220,0.5)',
          borderColor: 'rgba(220,220,220,0.8)',
          hoverBackgroundColor: 'rgba(220,220,220,0.75)',
          hoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(151,187,205,0.5)',
          borderColor: 'rgba(151,187,205,0.8)',
          hoverBackgroundColor: 'rgba(151,187,205,0.75)',
          hoverBorderColor: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    }
    this.dougdata = {
      labels: ['item1', 'item2', 'item3', 'item4', 'item5'],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            '#F7464A',
            '#46BFBD',
            '#FDB45C',
            '#949FB1',
            '#4D5360',
          ],
          hoverBackgroundColor: [
            '#FF5A5E',
            '#5AD3D1',
            '#FFC870',
            '#A8B3C5',
            '#616774',
          ],
        },
      ],
    }
    this.piedata = { ...this.dougdata }
    this.polardata = { ...this.dougdata }
    this.radardata = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(220,220,220,0.2)',
          borderColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointborderColor: '#fff',
          pointhoverBackgroundColor: '#fff',
          pointhoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointborderColor: '#fff',
          pointhoverBackgroundColor: '#fff',
          pointhoverBorderColor: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    }
  }

  render() {
    return (
      <div className={mstyles.chart}>
        <div className={mstyles.d200}>
          <Line data={this.linedata} />
        </div>
        <div className={mstyles.d200}>
          <Bar data={this.bardata} redraw />
        </div>
        <div className={mstyles.d200}>
          <Doughnut data={this.dougdata} />
        </div>
        <div className={mstyles.d200}>
          <Pie data={this.piedata} />
        </div>
        <div className={mstyles.d200}>
          <Polar data={this.polardata} />
        </div>
        <div className={mstyles.d200}>
          <Radar data={this.radardata} />
        </div>
      </div>
    )
  }
}
