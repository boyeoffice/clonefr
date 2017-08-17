<template>
	        <nav v-if="isAuth" class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <!-- Branding Image -->
                    <router-link class="navbar-brand" to="/">
                        iCLONE
                    </router-link>
                </div>
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                       <form class="navbar-form navbar-left" role="search" autocomplete="off" action="http://shotpro.miguelvasquez.net/search" method="get">
                          <div class="form-group">
                        <input name="q" class="form-control" id="btnItems" placeholder="Search" type="text">
                         <button type="submit" id="buttonSearch"><i class="fa fa-search"></i></button>
                         </div><!--/.form-group -->
                     </form>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                          <li class="dropdown"> <img :src="url + '/' + auth_user.avatar" style="margin-top: 5px;" width="40" height="40" class="img img-rounded"> </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{auth_user.name}} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                <li><router-link :to="'/' + auth_user.username"> <i class="fa fa-user"></i> {{auth_user.username}} </router-link>
                                <li><router-link to="/user/account"> <i class="fa fa-user"></i> Account </router-link>
                                 </li>
                                    <li>
                                        <a href="#" @click="logout"><i class="fa fa-sign-out"></i> Logout</a>
                                    </li>
                                </ul>
                            </li>
                    </ul>
            </div>
        </nav>
</template>

<script>
	import Auth from '../../store/auth.js'
	export default {
		name: 'navbar',
		data() {
			return{
            
			}
		},
		computed: {
            url(){
                return this.$store.state.url
            },
			isAuth(){
				return Auth.isAuthenticated()
			},
            auth_user(){
                return this.$store.state.auth_user
            }
		},
		methods: {
			logout(){
				axios.post('api/logout').then(res => {
					if(res.data.done) {
						Auth.remove()
                         window.location.href = "/login"
						/*this.$router.push('/login')*/
					}
				})
			}
		}
	}
</script>
<style lang="scss">
  .navbar-default .navbar-form {
    border-color: transparent;
}  
.navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.navbar-form .form-control {
    display: inline-block;
    width: 500px;
    vertical-align: middle;
}
</style>