<template>
<div class="content">
	<div class="container">
		<div class="row">
			<router-view></router-view>
			<sidebar></sidebar>
		</div>
	</div>
</div>	
</template>

<script>
	import Sidebar from './views/user/Sidebar.vue'
	export default{
		components:{ Sidebar }
	}
</script>