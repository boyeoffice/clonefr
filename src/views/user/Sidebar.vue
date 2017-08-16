<template>
	<div class="col-xs-4">
		<div class="panel panel-default">
			<div class="panel-body padding-top padding-top-zero padding-right-zero padding-left-zero">
				<div class="cover-wall" style="background: center center #0088E2; background-size: cover;">
				</div>
					<div class="media media-visible pd-right">
						<a href="#" class="btn-block photo-card-live myprofile">
					    <img class="border-image-profile img-circle photo-card" alt="Image" :src="url + '/' + user.avatar" height="80" width="80">
					  </a>
						         <div class="media-body">
									    <h4 class="user-name-profile-card btn-block  text-center">
									    	<a class="myprofile" href="#">
									    		<span class="none-overflow">{{user.username}}</span>
									    	</a></h4>
							      </div>
					</div><!--end media-->
					<ul class="nav list-inline nav-pills btn-block nav-user-profile-wall">
					<li><a href="#">Shots <small class="btn-block sm-btn-size counter-sm">444</small></a></li>
					<li><a href="#">Follower <small class="btn-block sm-btn-size counter-sm">444</small></a></li>
					<li><a href="#">Following <small class="btn-block sm-btn-size counter-sm">444</small></a></li>
					</ul>
			</div>
		</div>

		<div class="list-group">
			<a href="#" class="list-group-item "> <i class="fa fa-envelope myicon-right"></i> Messages 
			  	<span class="pull-right">
			  		<i class="fa fa-chevron-right "></i>
			  	</span>
		  	</a>
		  	<router-link to="/user/account" class="list-group-item "> <i class="fa fa-edit myicon-right"></i> Edit Profile
			  	<span class="pull-right">
			  		<i class="fa fa-chevron-right "></i>
			  	</span>
		  	</router-link>
		  	<router-link to="/user/account/avatar_cover" class="list-group-item "> <i class="fa fa-camera myicon-right"></i> Avatar and Cover
			  	<span class="pull-right">
			  		<i class="fa fa-chevron-right "></i>
			  	</span>
		  	</router-link>
		  	<router-link to="/user/account/password" class="list-group-item "> <i class="fa fa-lock myicon-right"></i> Password
			  	<span class="pull-right">
			  		<i class="fa fa-chevron-right "></i>
			  	</span>
		  	</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			url(){
				return this.$store.state.url
			},
			user(){
				return this.$store.state.auth_user
			}
		}
	}
</script>
<style lang="scss">
.padding-top-zero {
    padding-top: 0 !important;
}
.padding-left-zero {
    padding-left: 0 !important;
}
.padding-right-zero {
    padding-right: 0 !important;
}
.cover-wall {
    border-bottom: 1px solid #ddd;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    height: 95px;
}
.media-visible {
    border-bottom: 1px solid #ddd;
    overflow: visible !important;
}
.media, .media .media {
    margin-top: 15px;
}
.photo-card-live {
    text-align: center;
}
.photo-card {
    margin-left: 10px;
    margin-top: -50px;
}
.border-image-profile {
    border: 4px solid rgba(255,255,255,0.3);
}
.btn-block {
    white-space: normal;
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
ul.nav-user-profile > li > a:not(.toggle-list):hover,
ul.nav-user-profile-wall > li > a:hover,
ul.nav-user-profile > li.active > a,
ul.nav-user-profile-wall > li.active > a,
ul.nav-user-profile-wall > li.active > a:hover,
ul.nav-user-profile > li.active > a:hover {
    background-color: transparent !important;
    box-shadow: inset 0 -4px #F40808;
    border-radius: 0;
    color: #333;
}
.list-group-item.router-link-exact-active,
 .list-group-item.router-link-exact-active:hover,
 .list-group-item.router-link-exact-active:focus {
    z-index: 2;
    color: #FAFAFA;
    background-color: #525252;
    border-color: #DBDBDB;
    outline: none;
}
</style>