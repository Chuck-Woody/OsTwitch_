import React from 'react'
import ReactDOM from 'react-dom'
import {signup} from './actions/session_actions'
import configureStore from './store/store'
import Root from './components/root'
import { updateChannel,getChannels } from './util/channel_api_util'
import {fetchChannels} from './actions/channel_actions'

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root")
  let store = configureStore()
  window.store = store
  window.signup = signup

  window.updateChannel = updateChannel
  window.fetchChannels = fetchChannels
 console.log(root)
  ReactDOM.render(<Root store={store} />,root)

})