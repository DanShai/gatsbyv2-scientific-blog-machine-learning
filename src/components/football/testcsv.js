import React from 'react'

class CsvComponent extends React.Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Letter</th>
              <th>ASCII Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.letter}</td>
                <td>{row.node.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CsvComponent
