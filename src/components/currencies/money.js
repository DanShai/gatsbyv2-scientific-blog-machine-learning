import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'
import AChart from './cryptchart'

export default class Money extends Component {
  constructor(props) {
    super(props)
    this._url_api =
      'https://api.coinmarketcap.com/v1/ticker/?limit=' + this.props.nums
    this.inValue = ''
    this.state = {
      currencies: [],
      isFilter: false,
      isLoading: false,
      error: null,
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })

    try {
      const result = await axios.get(this._url_api)
      const data = result.data
      this.setState({
        currencies: data,
        isLoading: false,
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      })
    }
  }

  sort_me(e) {
    const span_text = e.target.textContent
    const text = span_text.trim().toLowerCase()
    let scurrencies = null
    const { currencies } = this.state
    switch (text) {
      case 'rank':
        scurrencies = _.orderBy(currencies, [c => parseInt(c.rank)], ['asc'])
        break
      case 'name':
        scurrencies = _.orderBy(currencies, [c => c.name], ['asc'])
        break
      case 'price':
        scurrencies = _.orderBy(
          currencies,
          [c => parseFloat(c.price_usd)],
          ['desc']
        )
        break
      case 'total':
        scurrencies = _.orderBy(
          currencies,
          [c => parseFloat(c.total_supply)],
          ['desc']
        )
        break
      case 'change':
        scurrencies = _.orderBy(
          currencies,
          [c => parseFloat(c.percent_change_7d)],
          ['desc']
        )
        break

      default:
        break
    }

    this.setState({ currencies: scurrencies })
  }

  getValue(e) {
    const value = e.target.value
    this.inValue = value

    this.inValue.length >= 3
      ? this.setState({ isFilter: true })
      : this.setState({ isFilter: false })
  }

  get_filtred() {
    console.log(this.inValue)
    const { currencies } = this.state
    const filtred = currencies.filter(currency =>
      currency.name.toLowerCase().includes(this.inValue)
    )
    return this.display_res(filtred)
  }

  get_all() {
    const { currencies } = this.state
    return this.display_res(currencies)
  }

  display_res(somearray) {
    const display = somearray.map(currency => (
      <div key={currency.id} className="grid-5 border-1">
        <span className="cspan">{currency.rank}</span>
        <span className="cspan"> {currency.name} </span>
        <span className="cspan">{currency.price_usd}</span>
        <span className="cspan"> {currency.total_supply} </span>
        <span className="cspan"> {currency.percent_change_7d} </span>
      </div>
    ))
    return display
  }

  draw_data() {
    const { currencies } = this.state
    const data = currencies.slice(0, 5)
    const labels = data.map(c => c.name)
    const fdata = data.map(c => c.percent_change_7d)
    const achart = (
      <AChart id="test" name="money" labels={labels} data={fdata} />
    )
    return achart
  }
  render() {
    const { isLoading, error, isFilter } = this.state

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div className="box margin-top">
        {this.draw_data()}
        <div className=" cspan border-1 ">
          <span className="foot-span title">
            click on column titles below to sort by column or enter min 3 chars
            in input to search
          </span>
        </div>

        <div className=" cspan border-1 ">
          <label htmlFor="inp0" className="inp">
            <input
              type="text"
              id="inp0"
              placeholder="&nbsp;"
              onChange={e => this.getValue(e)}
            />
            <span className="label">Search</span>
            <span className="border" />
          </label>
        </div>
        <div className=" grid-5 border-1">
          <span className="foot-span title" onClick={e => this.sort_me(e)}>
            Rank
          </span>
          <span className="foot-span title" onClick={e => this.sort_me(e)}>
            {' '}
            Name{' '}
          </span>
          <span className="foot-span title" onClick={e => this.sort_me(e)}>
            {' '}
            Price{' '}
          </span>
          <span className="foot-span title" onClick={e => this.sort_me(e)}>
            {' '}
            Total{' '}
          </span>
          <span className="foot-span title" onClick={e => this.sort_me(e)}>
            {' '}
            Change{' '}
          </span>
        </div>
        {isFilter ? this.get_filtred() : this.get_all()}
      </div>
    )
  }
}
