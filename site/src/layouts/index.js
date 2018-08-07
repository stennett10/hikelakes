import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }


    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(0.5),
          marginTop: 0,
          padding: rhythm(1)
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          Hike Lakes
          </Link>


        <Link to={'/blog/'}>
          Blog
        </Link>
      </h1>
    )

    return (
      <div style={{ backgroundColor: 'white' }} >
        {header}

        {children()}

      </div>
    )
  }
}

export default Template
