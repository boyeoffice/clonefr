<template>
	        <nav v-if="isAuth" class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <!-- Branding Image -->
                    <router-link class="navbar-brand" to="/">
                        iCLONE
                    </router-link>
                </div>
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
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