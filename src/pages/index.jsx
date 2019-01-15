import React from 'react'
import SwipeableViews from 'react-swipeable-views'

import Stuff from 'components/Stuff'

const IndexPage = () => (
  <SwipeableViews>
    <Stuff title="SLIDE 1" background="red" />
    <Stuff title="SLIDE 2" background="blue" />
  </SwipeableViews>
)

export default IndexPage
