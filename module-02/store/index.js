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
      posts: [],
    },

    // UPDATE THE STATE:
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      // 3. update the state
      getPosts(state, posts) {
        state.posts = posts
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

      // 2. commit to mutaitin getPosts
      async getPosts({ commit }) {
        const posts = await this.$axios.$get(
          'https://jsonplaceholder.typicode.com/posts'
        )

        commit('getPosts', posts)
      },
    },

    // GET THE STATE:
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      // 4. make a getter
      posts(state) {
        return state.posts
      },
    },
  })
}
