import React, { Component } from 'react'
import PlComponent from '../../components/football/pl'
import Helmet from 'react-helmet'
import Layout from '../../components/site/layout'
import { graphql } from 'gatsby'

export default class Pleague extends Component {
  render() {
    const data = this.props.data.allE0Csv.edges
    return (
      <Layout bs={false}>
        <Helmet>
          <title>Blog - Dan </title>
          <meta name="description" content="Generic Page" />
        </Helmet>
        <section className="container">
          <header className="bheader">
            <h2> Testing CSV </h2>
          </header>
          <PlComponent data={data} />
        </section>
      </Layout>
    )
  }
}

export const CsvQuery = graphql`
  query {
    allE0Csv {
      edges {
        node {
          id
          Div
          HomeTeam
          AwayTeam
          FTHG
          FTAG
          FTR
        }
      }
    }
  }
`
