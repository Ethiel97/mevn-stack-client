import Vue from 'vue';
import Vuex from 'vuex'

import PostsService from "@/services/PostsService";
Vue.use(Vuex);

let state = {
    posts: []
}

let getters = {
    postsCount: (state) => {
        return state.posts.length
    },
    posts: (state) => {
        return state.posts;
    }
}

let mutations = {
    FETCH_POSTS_MUTATION: (state, data) => {
        state.posts = data;
    },
    ADD_POST_MUTATION: (state, newPost) => {
        state.posts.push(newPost)
    },
    // UPDATED_POST_MUTATION: (state, ) => {

    // },
    DELETE_POST_MUTATION: (state, post) => {
        state.posts.splice(state.posts.indexOf(post), 1)
        console.log('Post deleted successfully')
    }
}

let actions = {
    FETCH_POSTS: ({ commit }) => {
        PostsService.fetchPosts().then(res => {
            let posts = res.data;
            commit("FETCH_POSTS_MUTATION", posts)
        }).catch(err => console.log(error))
    },
    ADD_POST: ({ commit }, newPost) => {
        PostsService.addPost(newPost).then(res => {
            let newPost = res.data;
            commit("ADD_POST_MUTATION", newPost)
        }).catch(err => console.log(err))
    },
    UPDATE_POST: ({ commit }, post) => {
        PostsService.updatePost(post).then(res => {
            console.log(`Updated post is ${res.data.title}`)
        }).catch(err => console.log(err))
    },
    DELETE_POST: ({ commit }, post) => {
        PostsService.deletePost(post).then(res => {
            commit("DELETE_POST_MUTATION", res.data)

        }).catch(err => console.log(err))
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})