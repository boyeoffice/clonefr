<template>
	<div class="col-xs-8">
		<div class="panel panel-default">
			<div class="panel-heading grid-panel-title">
				<span class="btn-block">Password</span>
			</div>
			<div class="panel-body">
				<form class="form-horizontal" @submit.prevent="save">
				<div class="form-group">
				    <label for="inputEmail3" class="col-sm-2 control-label input-sm">Old password</label>
					<div class="col-sm-10">
						<input type="password" class="form-control input-sm" v-model="form.old_password" placeholder="Old Password">
							<span v-if="error.old_password" class="help-block">
	                           <strong>{{ error.old_password[0]}}</strong>
	                       </span>
					</div>
					</div>
					<div class="form-group">
					 <label for="inputEmail3" class="col-sm-2 control-label input-sm">New password</label>
					<div class="col-sm-10">
						<input type="password" class="form-control input-sm" v-model="form.new_password" placeholder="New Password">
									<span v-if="error.new_password" class="help-block">
			                            <strong>{{ error.new_password[0]}}</strong>
			                       </span>
					</div>
					</div>
					<div class="form-group">
			         <div class="col-sm-offset-2 col-sm-10">
			           <button type="submit" class="btn btn-info btn-sm btn-sort" v-if="! isProcessing">Save changes</button>
						 <button class="btn btn-info btn-sm btn-sort" disabled="disabled" v-else><i class="fa fa-circle-o-notch fa-spin"></i></button>
			       </div>
			      </div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isProcessing: false,
				form:{old_password: '', new_password: ''},
				error: {}
			}
		},
		methods: {
			save(){
				this.isProcessing = true
				axios.post('api/update_password', this.form).then(response => {
					if(response.data.success) {
						console.log(response)
					}
					this.isProcessing = false
				}).catch(err => {
					if(err.response.status === 422){
						this.error = err.response.data
					}
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