import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../../assets/css/styles.css'

const About = props => (
  <section className="about bg-light">
    <div className="container">
      <div className="grid-2">
        <div className="box boxshadow">
          <h3>Hobbies</h3>
          <p>
          explicabo consectetur consequatur non nesciunt debitis quos alias
            soluta, ratione, ipsa officia reiciendis.
                  </p>
        </div>
        <div className="box boxshadow">
          <h3>About Me</h3>
          <p>
          explicabo consectetur consequatur non nesciunt debitis quos alias
            soluta, ratione, ipsa officia reiciendis.
                  </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
