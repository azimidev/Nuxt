export default ({ store }) => {
  console.log(
    '%c [Middleware] check auth!',
    'font-size: 15px; font-weight: bold'
  )
  if (process.client) {
    store.dispatch('initAuth')
  }
}
