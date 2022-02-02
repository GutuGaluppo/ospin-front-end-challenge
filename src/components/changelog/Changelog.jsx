import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import Oskarkokoschka from 'images/Oskar_Kokoschka.jpg'

const Changelog = () => (
  <Container>
    <Segment>
      <Image src={Oskarkokoschka} alt='oskar kokoschka picture' size='large' centered style={{ padding: '20px' }} />
    </Segment>
  </Container>
)

export default withRouter(Changelog)
