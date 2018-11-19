import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/site/layout'
import 'katex/dist/katex.min.css'
// import '../assets/css/mkatex.css'

class Blog extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <Layout bs={false}>
        <Helmet>
          <title>Blog - Dan </title>
          <meta name="description" content="Generic Page" />
        </Helmet>
        <section className="container">
          <header className="bheader">
            <h2> Latest Posts </h2>
          </header>
          <div className="grid-2">
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <div key={node.fields.slug} className="box boxshadow">
                  <h3>
                    <Link className="alink" to={node.fields.slug}>
                      <span>{title}</span>{' '}
                      <span>
                        <small>{node.frontmatter.date}</small>
                      </span>
                    </Link>
                  </h3>
                  <div
                    className="summary"
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}
export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
