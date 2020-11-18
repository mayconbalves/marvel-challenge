import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from 'pages/home'
import CharacterDetails from 'pages/character-details'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters/:id' component={CharacterDetails} />
        <Redirect to='/' />
      </Switch>
    </Router>
  </Provider>
)

Root.prototypes = {
  store: PropTypes.object.isRequired
}

export default Root
