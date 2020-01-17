<template>
	<div class="fullscreen" @click="handleFullScreen">
		<el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
			<i class="el-icon-rank"></i>
		</el-tooltip>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				fullscreen: true
			}
		},
		methods: {
			handleFullScreen() {
				console.log(123123)
				let element = document.documentElement
				if (this.fullscreen) {
					if (document.exitFullscreen) {
						document.exitFullscreen()
					} else if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen()
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen()
					} else if (document.msExitFullscreen) {
						document.msExitFullscreen()
					}
				} else {
					if (element.requestFullscreen) {
						element.requestFullscreen()
					} else if (element.webkitRequestFullScreen) {
						element.webkitRequestFullScreen()
					} else if (element.mozRequestFullScreen) {
						element.mozRequestFullScreen()
					} else if (element.msRequestFullscreen) {
						// IE11
						element.msRequestFullscreen()
					}
				}
				this.fullscreen = !this.fullscreen
			}
		}
	}
</script>

<style lang="less" scoped>
	.el-icon-rank {
		transform: rotate(45deg);
	}
</style>
