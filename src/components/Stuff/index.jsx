import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const Stuff = ({ title, background }) => (
  <Wrapper background={background}>{title}</Wrapper>
)

Stuff.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
}

export default Stuff
