import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../../assets/css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Interet = props => (
  <section className="interests">
    <div className="container grid-3 center">
      <div className="box boxshadow">
        <a href="https://github.com/DanShai">GitHub</a>
        <p>
          explicabo consectetur consequatur non nesciunt debitis quos alias
          soluta, ratione, ipsa officia reiciendis.
        </p>
      </div>
      <div className="box boxshadow">
        <Link className="alink" to="/blog">
          Blog
        </Link>
        <p>
          explicabo consectetur consequatur non nesciunt debitis quos alias
          soluta, ratione, ipsa officia reiciendis.
        </p>
      </div>
      <div className="box boxshadow">
        <Link className="alink" to="/proj">
          Projects
        </Link>
        <p>
          explicabo consectetur consequatur non nesciunt debitis quos alias
          soluta, ratione, ipsa officia reiciendis.
        </p>
      </div>
    </div>
  </section>
)

export default Interet
