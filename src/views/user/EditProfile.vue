<template>
<div class="content">
	<div class="container">
		<div class="row">
			<div class="col-xs-8">
				<div class="panel panel-default">
			      <div class="panel-heading grid-panel-title">
			      <span class="btn-block">Edit Profile</span>
			      </div>
			      <div class="panel-body">
			      	<form class="form-horizontal" @submit.prevent="update">
			      		<div class="form-group">
			      			<label for="inputEmail3" class="col-sm-2 control-label input-sm">Full name</label>
			      			<div class="col-sm-10">
			                      <input class="form-control input-sm"
			                      v-model="user.name" placeholder="Full name" type="text">  	
			                  </div>
			      		</div>
			      		<div class="form-group">
			      			<label for="inputEmail3" class="col-sm-2 control-label input-sm">Username</label>
			      			<div class="col-sm-10">
			                      <input class="form-control input-sm"
			                      v-model="user.username" placeholder="Username" type="text">  	
			                  </div>
			      		</div>
			      		<div class="form-group">
			      			<label for="inputEmail3" class="col-sm-2 control-label input-sm">E-mail</label>
			      			<div class="col-sm-10">
			                      <input class="form-control input-sm"
			                      v-model="user.email" placeholder="E-mail" type="text">  	
			                 </div>
			      		</div>
			      		<div class="form-group">
			      			<label for="inputEmail3" class="col-sm-2 control-label input-sm">Country</label>
			      			<div class="col-sm-10">
			                      <input class="form-control input-sm"
			                      v-model="user.location" placeholder="Country" type="text">  	
			                 </div>
			      		</div>
			      		<div class="form-group">
			      			<label for="inputEmail3" class="col-sm-2 control-label input-sm">About</label>
			      			<div class="col-sm-10">
			                      <textarea class="form-control input-sm"
			                      v-model="user.about" placeholder="About" type="text">  </textarea>	
			                 </div>
			      		</div>
			      		<hr>
			      		<div class="form-group">
						    <div class="col-sm-offset-2 col-sm-10">
						      <button type="submit" class="btn btn-info btn-sm btn-sort" v-if="! isProcessing">Save changes</button>
						      <button class="btn btn-info btn-sm btn-sort" v-else><i class="fa fa-circle-o-notch fa-spin"></i></button>
			    			   </div>
			           </div>
			      	</form>
			      </div>
		      </div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				isProcessing: false
			}
		},
		computed:{
			user(){
				return this.$store.state.auth_user
			}
		},
		methods:{
			update(){
				var vm = this
				this.isProcessing = true
				axios.post('api/update_profile', this.user).then(response => {
					console.log(response)
					this.isProcessing = false
				})
			}
		}
	}
</script>
<style lang="scss">
	.grid-panel-title {
    font-weight: bold;
    padding-top: 15px;
    background: #FFF !important;
    line-height: 20px;
}
</style>