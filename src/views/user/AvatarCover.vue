<template>
	<div class="col-xs-8">
		<div class="panel panel-default">
			<div class="panel-heading grid-panel-title">
		  	<span class="btn-block">
		  		Avatar and Cover
		  	</span><!-- **btn-block ** -->
		  </div>
		  <div class="panel-body">
		  	<form class="form-horizontal">
		  		<div class="form-group">
		  			<label for="exampleInputFile" class="col-sm-2 control-label input-sm">Avatar - 128x128px</label>
		  			<div class="col-sm-10">
		  				<img :src="url + '/' + user.avatar" width="128" height="128">
		  			</div>
		  		</div>
		  	</form>
		  	<!-- Avatar -->
		  	<form class="form-horizontal">
		  		<div class="form-group">
		  			<label for="exampleInputFile" class="col-sm-2 control-label input-sm">Cover - 1500px</label>
		  			<div class="col-sm-10">
		  				<img :src="url + '/' + user.cover" width="100%">
		  			</div>
		  		</div>
		  	</form>
		  </div>
		</div>
	</div>
</template>
<script>
	export default {
		computed: {
			user(){
				return this.$store.state.auth_user
			},
			url(){
				return this.$store.state.url
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