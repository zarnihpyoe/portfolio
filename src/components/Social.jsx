import React from 'react'
import { PropTypes } from 'prop-types'
import { css } from 'glamor'

import Icon from './Icon'

const urlFor = {
  github: name => `https://github.com/${name}`,
  twitter: name => `https://twitter.com/${name}`,
  medium: name => `https://medium.com/@${name}`,
  linkedin: name => `https://www.linkedin.com/in/${name}`,
  email: name => `mailto:${name}@gmail.com`
}

const style = css({
  textDecoration: 'none',
  color: 'inherit',
  margin: '6',
  opacity: '0.6',
  transition: 'opacity 0.2s ease',
  ':hover': {
    opacity: '1'
  },
})

const Social = ({ name, sites }) => (
  <div>
    {sites.map(site => (
      <a
        key={site}
        href={urlFor[site](name)}
        target={site==='email' ? "_self" : "_blank"}
        {...style}
      >
        <Icon icon={site}/>
      </a>
    ))}
  </div>
)

Social.propTypes = {
  name: PropTypes.string.isRequired,
  sites: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Social
