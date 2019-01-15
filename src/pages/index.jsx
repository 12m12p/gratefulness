import React from 'react'
import SwipeableViews from 'react-swipeable-views'

import Layout from 'components/Layout'
import Stuff from 'components/Stuff'

const IndexPage = () => (
  <Layout>
    <SwipeableViews>
      <Stuff title="SLIDE 1" background="red" />
      <Stuff title="SLIDE 2" background="blue" />
    </SwipeableViews>
  </Layout>
)

export default IndexPage
