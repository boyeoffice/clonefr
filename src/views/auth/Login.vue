<template>
	<section>
	<div class="login-box">
	<div class="login-logo">Clone</div>
	<div class="login-body">
	 <form @submit.prevent="Sign">
		<p class="login-box-msg">Login to start your session</p>
		<span v-if="error.message" class="help-block">
                  <strong>{{ error.message[0]}}</strong>
                 </span>
		<div class="form-group has-feedback">
				<input type="email" placeholder="Email" v-model="form.email" class="form-control">
				<span class="glyphicon glyphicon-envelope form-control-feedback"></span>
				<span v-if="error.email" class="help-block">
                  <strong>{{ error.email[0]}}</strong>
                 </span>
			</div>
			<div class="form-group has-feedback">
				<input type="password" placeholder="Password" v-model="form.password" class="form-control">
				<span class="glyphicon glyphicon-lock form-control-feedback"></span>
				<span v-if="error.password" class="help-block">
                  <strong>{{ error.password[0]}}</strong>
                 </span>
			</div>
			<div class="row">
				<div class="col-xs-4">
				<button class="btn btn-primary btn-flat" v-if="isProcessing">Please wait...</button>
				<button class="btn btn-primary btn-flat" v-if="!isProcessing">Sign In</button>
			    </div> 
			</div>
			</form>
		<div class="social-auth-links text-center">
		 <p>- OR -</p>
		<router-link to="/register" class="btn btn-block btn-clone btn-flat">Register</router-link>
		</div>
	</div>
</div><!-- end of login-box -->
	</section>
</template>

<script>
import Auth from '../../store/auth'

	export default{
		data(){
			return{
				method: 'post',
				form: {email: '',password: ''},
				error: {},
				isProcessing: false
			}
		},
		methods: {
			Sign(){
				this.isProcessing = true
				axios.post('api/login', this.form).then(res => {
                  if(res.data.authenticated){
                  	Auth.set(res.data.api_token, res.data.user_id, res.data.expiration + Date.now())
                    window.location.href = "/"
                  	/*this.$router.push('/')*/
                  }
                  this.isProcessing = false
				}) .catch(err => {
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
.login-box, .register-box {
	    width: 360px;
       margin: 7% auto;
}
.login-logo, .register-logo {
	font-size: 35px;
	text-align: center;
	margin-bottom: 25px;
	font-weight: 300;
}
.login-body, .register-body {
	background: #fff;
	padding: 20px;
	border-top: 0;
	color: #666;
}
.login-box-msg, .register-box-msg {
	margin: 0;
	text-align: center;
	padding: 0 20px 20px 20px;
}
.form-control-feedback {
    position: absolute;
    top: 0 !important;
    right: 0;
    z-index: 2;
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    pointer-events: none;
}
.btn.btn-flat {
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border-width: 1px;
}
.social-auth-links {
    margin: 10px 0;
}
.btn-facebook {
    color: #fff;
    background-color: #3b5998;
    border-color: rgba(0,0,0,0.2);
}
.btn-social {
    position: relative;
    padding-left: 44px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.btn-block + .btn-block {
    margin-top: 5px;
}
.btn-google {
    color: #fff;
    background-color: #dd4b39;
    border-color: rgba(0,0,0,0.2);
}
.btn-clone {
    color: #fff;
    background-color: #238415;
    border-color: rgba(0,0,0,0.2);
}
.btn.btn-flat {
    border-radius: 0;
    box-shadow: none;
    border-width: 1px;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
        padding-left: 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.btn-facebook:hover {
 color:#fff;
 background-color:#2d4373;
 border-color:rgba(0,0,0,0.2)
}
.btn-google:hover {
 color:#fff;
 background-color:#c23321;
 border-color:rgba(0,0,0,0.2)
}
.btn-clone:hover {
 color:#fff;
 background-color:#1a5312;
 border-color:rgba(0,0,0,0.2)
}
</style>