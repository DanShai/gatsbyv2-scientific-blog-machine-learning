import React from 'react'

export default class PlComponent extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div className="box boxshadow">
        <div className="grid-6">
          <h1>Division</h1>
          <h1>Home</h1>
          <h1>Away</h1>
          <h1>Home Goals</h1>
          <h1>Away Goals</h1>
          <h1>Result</h1>
        </div>
        {data.map((row, i) => (
          <div className="grid-6" key={`${row.node.id} ${i}`}>
            <span className="foot-span">
              {row.node.Div.replace('E0', 'PL')}
            </span>
            <span>{row.node.HomeTeam}</span>
            <span>{row.node.AwayTeam}</span>
            <span>{row.node.FTHG}</span>
            <span>{row.node.FTAG}</span>
            <span>{row.node.FTR}</span>
          </div>
        ))}
      </div>
    )
  }
}
