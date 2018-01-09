import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookmarksContainer from '../containers/BookmarksContainer'
import JumboItemContainer from '../containers/JumboItemContainer'

const BookmarksRoute = () => (

    <div>
      <Switch>
        <Route exact path='/bookmarks' component={BookmarksContainer}/>
        <Route path='/bookmarks/:number' component={JumboItemContainer}/>
      </Switch>
    </div>
  )

export default BookmarksRoute
