export default (context) => {
  console.log('%c [Middleware] auth!', 'font-size: 15px; font-weight: bold')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
