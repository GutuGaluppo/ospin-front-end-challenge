import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'

import theGiant from 'images/The_Giant.jpg'

const Profile = () => (
  <Container>
    <Segment>
      <Image src={theGiant} alt='image of a giant in the clouds' size='large' centered style={{ padding: '20px' }} />
    </Segment>
  </Container>
)

export default withRouter(Profile)
