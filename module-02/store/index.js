import Vuex from 'vuex'

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
