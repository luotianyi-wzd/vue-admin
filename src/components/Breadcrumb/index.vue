<template>
	<el-breadcrumb class="app-breadcrumb" separator="/">
		<el-breadcrumb-item v-for="item in list" :key="item.path">
			{{ item.meta.title }}
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		watch: {
			$route(route) {
				this.getBreadcrumb()
			}
		},
		created() {
			this.getBreadcrumb()
		},
		methods: {
			getBreadcrumb() {
				this.list = this.$route.matched.filter(item => item.meta && item.meta.title)
			}
		}
	}
</script>

<style lang="less" scoped>
	.app-breadcrumb.el-breadcrumb {
		display: inline-block;
		font-size: 14px;
		line-height: 50px;
		margin-left: 8px;

		.no-redirect {
			color: #97a8be;
			cursor: text;
		}
	}
</style>
