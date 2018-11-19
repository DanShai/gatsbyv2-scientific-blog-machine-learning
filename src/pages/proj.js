import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/site/layout'

const Proj = props => (
  <Layout>
    <Helmet>
      <title>Projects - Dan </title>
      <meta name="description" content="proj" />
    </Helmet>
    <section className="container">
      <header className="bheader">
        <h2> Projects </h2>
      </header>

      <div className="grid-2">
        <div className="box boxshadow">
          <Link className="alink" to="/projects/premierelg">
            FOOTBALL
          </Link>

          <p>
            explicabo consectetur consequatur non nesciunt debitis quos alias
            soluta, ratione, ipsa officia reiciendis.
          </p>
        </div>
        <div className="box boxshadow">
          <Link className="alink" to="/projects/mnistpred">
            MNIST NEURAL NET
          </Link>

          <p>
            explicabo consectetur consequatur non nesciunt debitis quos alias
            soluta, ratione, ipsa officia reiciendis.
          </p>
        </div>
        <div className="box boxshadow">
          <Link className="alink" to="/projects/mcrypto">
            Cypto Currencies
          </Link>

          <p>
            explicabo consectetur consequatur non nesciunt debitis quos alias
            soluta, ratione, ipsa officia reiciendis.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default Proj
