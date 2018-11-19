import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/site/layout'
import Interet from '../components/site/interests'
import About from '../components/site/about'
import favicon from '../assets/images/omega.png'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Dan - Shai"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />

        <Interet />
        <About />
      </Layout>
    )
  }
}

export default HomeIndex
