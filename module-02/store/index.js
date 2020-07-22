import Vuex from 'vuex'
import data from '@/api/data.json'
import { SET_POSTS, LOGIN } from './types'

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
      // 3. update the state
      [SET_POSTS](state, posts) {
        state.loadedPosts = posts
      },

      [LOGIN](state, credentials) {
        // JWT:
        // 1. send the credentials to the server
        // 2. server checks if they are OK
        // 3. if OK then server gives you a token (if not OK then server gives you an error which you need to show)
        // 4. you save the token in the `localStorage`
        // 5. make a middleware which send the stored token for every request.
        // 6. if middleware token === your `localStorage` token then you have access if not then don't.
        console.log(credentials)
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
            vuexContext.commit(SET_POSTS, data)
            resolve()
          }, 2000)
        })
      },

      // 2. commit to mutaitin getPosts
      async setPosts(context, posts) {
        await context.commit(SET_POSTS, posts)
      },

      async login(context, credentials) {
        await context.commit(LOGIN, credentials)
      },
    },

    // GET THE STATE:
    getters: {
      // 4. make a getter
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}
