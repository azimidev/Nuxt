import Vuex from 'vuex'
import data from '@/api/data.json'

/**
 * Classic Mode
 *
 * 1. You dispatch an action
 * 2. You commit to mutation inside actions
 */

export default () => {
  return new Vuex.Store({
    // DTATA
    state: {
      loadedPosts: [],
    },

    // UPDATE THE STATE:
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
    },

    // COMMIT TO MUTATIONS:
    actions: {
      nuxtServerInit(vuexContext, context) {
        // process
        // context.req
        // context.res
        return new Promise((resolve) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', data)
            resolve()
          }, 2000)
        })
      },

      // DISPATCH
      setPosts(context, posts) {
        context.commit('setPosts', posts)
      },
    },

    // GET THE STATE:
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}
