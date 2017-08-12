export default {
	authenticatedUser: {},
	state: {
		    api_token: null,
		    user_id: null,
		    expiration: null
	},
	initialize() {
		      this.state.api_token = localStorage.getItem('api_token')
		      this.state.user_id = parseInt(localStorage.getItem('user_id'))
		      this.state.expiration = parseInt(localStorage.getItem('expiration'))
	},
	set(api_token, user_id, expiration) {
		localStorage.setItem('api_token', api_token)
		localStorage.setItem('user_id', user_id)
		localStorage.setItem('expiration', expiration)
		this.initialize()
	},
	remove() {
		     localStorage.removeItem('api_token')
		     localStorage.removeItem('user_id')
		     localStorage.removeItem('expiration')
		     this.initialize()
	},
	getToken(){
             var api_token = localStorage.getItem('api_token')
             var user_id = parseInt(localStorage.getItem('user_id'))
             var expiration = parseInt(localStorage.getItem('expiration'))
             if(! api_token || ! user_id || ! expiration)
             	return null
             if(Date.now() > parseInt(expiration)){
             	this.remove()
             	return null
             }else
             return api_token
	},
	isAuthenticated() {
		          if(this.getToken())
		          	return true
		          else
		          	return false
	},
	setAuthenticatedUser(data) {
       this.authenticatedUser = data
	},
	getAuthenticatedUser() {
      return this.authenticatedUser
	}
}