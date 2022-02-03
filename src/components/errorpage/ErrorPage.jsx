import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Image } from 'semantic-ui-react'
import pageNotFound from 'images/500Illustration.png'

const ErrorPage = () => (
  <Container className='error-container'>
    <Image src={pageNotFound} alt='500 error picture' fluid />
    <h1>Sorry, Page Not Found</h1>
  </Container>
)

export default withRouter(ErrorPage)
