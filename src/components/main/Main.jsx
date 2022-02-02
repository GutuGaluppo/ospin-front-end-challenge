/* eslint-disable spaced-comment */
import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import OspinSidebar from 'components/main/OspinSidebar'
import Devices from 'components/devices/Devices'
import Changelog from 'components/changelog/Changelog'
import Profile from 'components/profile/Profile'
import Notifications from 'components/notifications/Notifications'
import ErrorPage from 'components/errorpage/ErrorPage'

const Main = () => (
  <div>
    <BrowserRouter forceRefresh={false}>

      <OspinSidebar />

      <Container fluid className='main-content'>
        <Switch>
          <Route exact path='/' component={Devices} />
          {/*not sure if this should be modified to some Home page, so I just keep it as it is. */}
          <Route path='/devices' component={Devices} />
          <Route path='/profile' component={Profile} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/changelog' component={Changelog} />
          <Route path='/error' component={ErrorPage} />
        </Switch>
      </Container>

    </BrowserRouter>
  </div>
)

export default Main
