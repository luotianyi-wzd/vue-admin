<template>
	<div :class="classObj" class="app-wrapper">
		<sidebar class="sidebar-container"/>
		<div class="main-container">
			<div>
				<navbar/>
				<tags-view/>
			</div>
			<transition name="fade-transform" mode="out-in">
				<keep-alive>
					<router-view :key="key"/>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { Sidebar, Navbar, TagsView } from './components'

	export default {
		name: 'Layout',
		components: {
			Navbar,
			Sidebar,
			TagsView
		},
		computed: {
			...mapState({
				sidebar: state => state.app.sidebar
			}),
			classObj() {
				return {
					hideSidebar: !this.sidebar.opened
				}
			},
			key() {
				return this.$route.path
			}
		}
	}
</script>
