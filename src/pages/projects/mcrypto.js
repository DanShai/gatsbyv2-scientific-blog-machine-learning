import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/site/layout'
import Money from '../../components/currencies/money'

export default class Mcrypto extends Component {
  render() {
    return (
      <Layout bs={false}>
        <Helmet>
          <title>Crypto Money - Dan </title>
          <meta name="description" content="snake" />
        </Helmet>
        <section className="container">
          <header className="bheader">
            <h2> Crypto - Money ! </h2>
          </header>
          <Money nums={50} />
        </section>
      </Layout>
    )
  }
}
