<template>
<div class="content">
	<div class="col-xs-5 col-lg-offset-4">
		<div class="panel panel-default">
		<div class="upload">
			<input type="file" class="input-file" v-on:change="onFileChange">
			<p><i class="glyphicon glyphicon-camera"></i> </p>
		</div>
		</div>
  <modal v-if="showModal" @close="showModal = false">
    <div slot="body">
			<img :src="form.image" height="250" class="img img-responsive">
			<div style="margin-top: 10px;">
			<textarea class="form-control" v-model="form.content" placeholder="Write a caption"></textarea>
			</div>		
	     </div><!-- end body -->
	     <div slot="footer">
			<button v-if="upButton" @click="Upload" class="btn btn-sm btn-primary">Upload</button>
			<button v-if="!upButton" disabled="disabled" class="btn btn-sm btn-primary"><i class="fa fa-circle-o-notch fa-spin"></i></button>
			</div>
  </modal>
     <post-viewer v-for="post in model.data" @update-post="fetchPost" :post="post" :key="model"></post-viewer>
	</div><!-- end col-xs-4 -->
</div>
</template>

<script>

import PostViewer from './posts/PostViewer.vue'
	export default {
		components: { PostViewer },
		data(){
			return{
				upButton:true,
				model: {data: []},
				form: {image: '', content: '' },
				showModal: false
			}
		},
		
		mounted(){
			this.fetchPost()
		},
		methods: {
			     onFileChange(e){
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
          },
          createImage(file){
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
              vm.form.image = e.target.result;
            };
            reader.readAsDataURL(file);
            this.showModal = true
          },
        Upload(){
        	var vm = this
        	this.upButton = false
            axios.post('api/post', this.form).then(response => {
            	this.fetchPost()
            	this.uploadf()
            	
            })
          },
          fetchPost(){
          	axios.get('api/post').then(response => {
          		this.model = response.data
          		this.isLoading = false

          	})
          },
          uploadf(){
          	this.form = {image: '', content: ''},
          	this.showModal = false
          	this.upButton = true
          }
		}
	}
</script>

<style lang="scss">
.upload {
	color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
	padding: 3px 0px 2px;
	min-height: 20px;
	position: relative;
	cursor: pointer;
}
.input-file {
	opacity: 0;
	width: 100%;
	height: 38px;
	position: absolute;
	cursor: pointer;
}
.upload:hover {
	color: #fff;
   background-color: #286090;
   border-color: #122b40;
}
.upload p {
	font-size: 2em;
	text-align: center;
	margin-top: 1px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 650px;
  margin: 0px auto;
  padding: 5px 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-header {
    padding: 10px;
    border-bottom: 0px;
    min-height: 16.428571429px;
}
.modal-footer {
    padding: 10px;
    min-height: 16.428571429px;
}

</style>