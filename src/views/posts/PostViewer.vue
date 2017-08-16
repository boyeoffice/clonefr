<template>
	 <div class="thumbnail col-thumb">
	 <div class="caption">
	 	<p class="author p-author">
	 		<a href="#" class="label label-primary btn-team-xs pull-right"><i class="glyphicon glyphicon-menu-down"></i></a>
	 		<router-link :to="post.user.username" class="myicon-right">
    			<img :src="url + '/' + post.user.avatar" class="img-circle img-avatar-shots" height="20" width="20">
    		</router-link>
    		<router-link :to="post.user.username" class="myicon-right myicon-right text-decoration-none">
    		{{post.user.username}} </router-link>
	 	</p>
	 </div>
	 <a class="position-relative btn-block" href="#">
    	<img title="Beach house" :src="url + post.image" min-height="200" class="image-url img-responsive btn-block"></a>
	 	<div class="caption"><span class="post-comment">{{post.content}}</span></div><!--end caption -->
           <div class="caption">
    				<p class="actions">  
    				    <span class="btn btn-xs pull-left btn-like likeButton" v-show="! isProcessing" v-if="likeUser" @click="like">
    						  <i class="fa fa-heart"></i>
    					</span> 
    					<span class="btn btn-xs pull-left  btn-like" v-show="! isProcessing" v-if="! likeUser" @click="like">
    						<i class="fa fa-heart-o"></i>
    					</span>  
    					<span class="btn btn-xs pull-left  btn-like" v-show="isProcessing">
    						<i class="fa fa-spinner fa-spin"></i>
    					</span> 

    					<span class="pull-right">
    						<i class="fa fa-heart myicon-right"></i> <span class="like_count myicon-right strongSpan">{{likers.length}}</span>
    						<i class="fa fa-eye myicon-right"></i> <span class="myicon-right strongSpan">6</span>
    						<i class="fa fa-comment myicon-right"></i> <span class="myicon-right strongSpan">0</span>
    				</span>
    				</p>
    		</div><!-- end caption -->
	 </div>
</template>
<script>
	export default {
		props: ['post'],
		data(){
			return{
				form:{id: ''},
				isProcessing: false
			}
		},
		computed: {
			url(){
				return this.$store.state.url
			},
			likers() {
				var likers = []
				this.post.likes.forEach((like) => {
					likers.push(like.user_id)
				})
				return likers
			},
			likeUser() {
				var check_index = this.likers.indexOf(this.$store.state.auth_user.id)
				if(check_index === -1)
					return false
				else
					return true
			}
		},
		methods: {
			like(){
				this.form.id = this.post.id
				this.isProcessing = true
				axios.post('api/js/like', this.form).then(response => {
						this.$emit('update-post')
						this.isProcessing = false
				})
			}
		}
	}
</script>
<style lang="scss">
	
</style>