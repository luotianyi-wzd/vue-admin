<template>
	<div>
		<div class="logs" v-for="log in logs">
			{{ log }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "log",
		data() {
			return {
				logs: this.$store.state.errorLog.logs
			}
		},
		computed: {
		
		},
		mounted() {
			a()
		},
		methods: {
			a() {
				return a
			}
		}
	}
</script>

<style scoped>

</style>
