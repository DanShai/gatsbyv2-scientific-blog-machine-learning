import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/site/layout'
import 'katex/dist/katex.min.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next, index, total } = this.props.pageContext

    console.log(this.props.pageContext)
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className="container">
          <Link className="alink" to="/blog">
            Back to Blog
          </Link>
          <span className="bheader">
            <h3>
              {post.frontmatter.date} , {post.frontmatter.author}
            </h3>
            <h2>{post.frontmatter.title}</h2>
          </span>
          <div
            className="box boxshadow"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <ul className="grid-2">
            {previous && (
              <li className="left">
                <span>
                  <Link className="alink" to={previous.fields.slug} rel="prev">
                    {previous.frontmatter.title}
                  </Link>
                </span>
              </li>
            )}

            {next && (
              <li className="right">
                <span>
                  <Link className="alink" to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                  </Link>
                </span>
              </li>
            )}
          </ul>
        </section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
