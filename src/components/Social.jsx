import React from 'react'
import { PropTypes } from 'prop-types'
import { css } from 'glamor'

import Icon from './Icon'

const urlFor = {
  github: name => `https://github.com/${name}`,
  twitter: name => `https://twitter.com/${name}`,
  medium: name => `https://medium.com/@${name}`,
  linkedin: name => `https://www.linkedin.com/in/${name}`,
}

const divStyle = css({
  background: '#222',
  margin: '12',
  padding: '12',
  borderRadius: '100%',
  display: 'inline-block',
  transition: 'background 0.2s ease',
  ':hover': {
    background: '#7C4DFF'
  },
})

const aStyle = css({
  textDecoration: 'none',
  color: 'white',
})

const Social = ({ name, sites }) => (
  <div>
    {sites.map(site => (
      <div {...divStyle} key={site}>
        <a
          href={urlFor[site](name)}
          target="_blank"
          {...aStyle}
        >
          <Icon>{site}</Icon>
        </a>
      </div>
    ))}
  </div>
)

Social.propTypes = {
  name: PropTypes.string.isRequired,
  sites: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Social
