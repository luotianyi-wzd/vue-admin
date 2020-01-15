<template>
	<div class="login">
		login
		<el-button @click="handleLogin">login</el-button>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				redirect: undefined,
				otherQuery: {}
			}
		},
		watch: {
			$route: {
				handler(route) {
					const query = route.query
					if (query) {
						this.redirect = query.redirect
						this.otherQuery = this.getOtherQuery(query)
					}
				},
				immediate: true
			}
		},
		methods: {
			handleLogin() {
				this.$store.dispatch('user/login')
					.then(() => {
						this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
					})
			},
			getOtherQuery(query) {
				return Object.keys(query).reduce((acc, cur) => {
					if (cur !== 'redirect') {
						acc[cur] = query[cur]
					}
					return acc
				}, {})
			}
		}
	}
</script>

<style scoped>

</style>
