export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/en', { redirectCode: 302 })
  }
})
