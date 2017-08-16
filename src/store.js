import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export const store = new Vuex.Store({
	state: {
		url: 'http://api.iclone.ga',
		posts: [],
		auth_user: {},
		user_profile: {posts:[]}
	},
	getters: {
		all_posts_count(state){
			return state.posts.length
		},
		all_posts(state){
			return state.posts
		},
		get_all_user_post(state){
			return state.user_profile.posts.data
		},
		user_post_count(state){
			return state.user_profile.total
		}
	},
	mutations: {
		add_post(state, post) {
			state.posts.push(post)
		},
		auth_user_data(state, user){
			state.auth_user = user
		},
		user_profile_data(state, profile){
			state.user_profile = profile
		}
	}
})