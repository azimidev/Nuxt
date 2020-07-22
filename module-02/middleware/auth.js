export default (context) => {
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
