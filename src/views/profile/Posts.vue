<template>
	<div class="content">
		<div class="container">
		<div class="col-xs-4">
			<h3>Favourite (0)</h3>
		</div><!-- end of col-xs-4-->
		<div class="col-xs-6">
		<post-viewer v-for="post in model.data" @update-post="fetchData" :post="post" :key="model.data"></post-viewer>
		</div>
		</div>
	</div>
</template>
<script>
import PostViewer from './PostViewer.vue'
	export default {
		name: "posts",
		components: { PostViewer },
		data(){
			return{
				model: {data:[]},
				likeUser: ''
			}
		},
		mounted(){
            this.fetchData()
		},
		
		methods: {
			fetchData(){
				var vm = this
			axios.get('api/vint/' + vm.$route.params.username).then(response => {
				this.model = response.data
			})
			}
		}
	}
</script>

<style lang="scss">

</style>