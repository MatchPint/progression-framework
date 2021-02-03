const ReactGA = require('react-ga')

ReactGA.initialize('')
ReactGA.set({
  appName: 'Progression at MatchPint'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
