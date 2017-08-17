<template>
<div>
	<nav class="user-profile-top">
		<div class="container">
		 <div class="btn-block text-center"><a href="#" class="position">
		 <img :src="url + '/' + profile.user.avatar" class="img-circle border-avatar-profile" width="128" height="128">
		 </a>
		 </div><!-- end btn-block -->
		 <h3 class="w_text">{{profile.user.username}}</h3>
		 <div class="btn-block text-center" v-if="profile.user.username == auth_user.username ">
		 	<router-link to="/user/account" class="btn btn-default btn-follow-lg btn-sm"><i class="fa fa-pencil myicon-right"></i>   Edit Profile</router-link>
		 </div><!-- end btn-block -->
		 <div class="btn-block text-center" v-else>
		 	<a href="#" @click="follow" v-if="followUser" class="btn btn-default btn-follow-lg btn-sm">UnFollow</a>
		 	<a href="#" @click="follow" v-else class="btn btn-default btn-follow-lg btn-sm">Follow</a>
		 </div><!-- end btn-block -->
		 <p class="subtitle-user text-center">{{profile.user.location}}</p>
		</div>
	</nav>

	<nav class="navbar navbar-inverse">
			<div class="container">
				<div style="width: 100%">
					<ul class="nav nav-pills nav-user-profile">
						<li class="active"><router-link :to="'/' + profile.user.username">Posts
						<small class="btn-block sm-btn-size text-center counter-sm">{{profile.total}}</small></router-link></li>
						<li class=""><router-link :to="'/' + profile.user.username + '/followers'">Followers
						<small class="btn-block sm-btn-size text-center counter-sm">{{profile.totalFollower}}</small></router-link></li>
						<li class=""><router-link :to="'/' + profile.user.username + '/following'">Following
						<small class="btn-block sm-btn-size text-center counter-sm">{{profile.totalFollowing}}</small></router-link></li>
						<li class=""><a href="#">Favourite
						<small class="btn-block sm-btn-size text-center counter-sm">{{profile.total}}</small></a></li>
					</ul>
				</div>
			</div>
		</nav>
		<router-view></router-view>
</div>
</template>
<script>
	export default {
		name: "StaticUser",
		computed: {
			auth_user(){
				return this.$store.state.auth_user
			},
			url(){
				return this.$store.state.url
			},
			followers(){
				var followers = []
				this.profile.followers.forEach((followed) => {
					followers.push(followed.follower)
				})
				return followers
			},
			followUser() {
				var check_index = this.followers.indexOf(this.$store.state.auth_user.id)
				if(check_index === -1)
					return false
				else
					return true
			}
		},
		data(){
			return{
				profile:{user:{}},
				form:{id: ''}
			}
		},
		mounted(){
			this.getProfile()
		},
		watch:{
			'$route': 'getProfile'
		},
		methods: {
				getProfile(){
					var vm = this
				axios.get('api/' + vm.$route.params.username).then(response => {
				   this.profile = response.data
				})
			},
			follow(){
				this.form.id = this.profile.user.id
				axios.post('api/js/follow', this.form).then(response => {
					this.getProfile()
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-profile-top {
		padding-top: 18px;
		background: #000;
	}
	.position-relative {
          position: relative;
	}
	.border-avatar-profile {
    border: 5px solid rgba(255, 255, 255, 0.3);
}
.w_text {
    font-family: 'Kaushan Script', cursive;
    color: #FFF;
    text-shadow: 0 3px #000;
    text-overflow: inherit;
    overflow: visible;
    white-space: normal;
    font-weight: bold;
    text-align: center;
    margin-top: 20px !important;
    word-break: break-word;
}
button.btn-follow-lg, a.btn-follow-lg {
    background: transparent;
    color: #FFF !important;
    padding: 7px 30px;
    border: 1px solid #FFF;
    margin: 10px 0;
}
a.btn-follow-lg:hover, a.btn-follow-lg:focus {
	background: #F40808;
	border: 1px solid #F40808;
}
p.subtitle-user {
    font-size: 15px;
    line-height: 1.4;
	color: #FFF;
	text-shadow: 0 1px #000;
	text-overflow: inherit;
	overflow: visible;
	white-space: normal;
    padding-bottom: 20px;
    }
    .myicon-right {
    margin-right: 4px;
}
	.navbar-inverse {
    background-color: #fff;
    border-bottom: 1px solid #ddd !important;
}
.navbar {
  margin-bottom: 0px;
    font-size: 16px;
    min-height: 53px;
    margin-bottom: 0;
    border: none;
    border-radius: 0;
}
ul.nav-user-profile > li > a:hover:not(.toggle-list),
 ul.nav-user-profile-wall > li > a:hover,
  ul.nav-user-profile > li.active > a,
   ul.nav-user-profile-wall > li.active > a,
    ul.nav-user-profile-wall > li.active > a:hover,
     ul.nav-user-profile > li.active > a:hover {
    background-color: transparent !important;
    box-shadow: inset 0 -4px #F40808;
    border-radius: 0;
    color: #333;
    font-size: 12px;
    font-weight: normal !important;
}
.counter-sm {
    color: #F40808;
    font-size: 17px !important;
    line-height: 15px;
}
ul.nav-user-profile > li > a, ul.nav-user-profile-wall > li > a {
    font-size: 12px;
    font-weight: normal !important;
    color: #333;
    border: none !important;
}
</style>