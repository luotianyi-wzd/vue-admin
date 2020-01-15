<template>
	<div>
		<logo :collapse="!sidebar.opened"></logo>
		<el-menu :default-active="activeMenu"
		         :background-color="variables.menuBg"
		         :text-color="variables.menuText"
		         :unique-opened="false"
		         :active-text-color="variables.menuActiveText"
		         :collapse-transition="false"
		         mode="vertical"
		         :collapse="!sidebar.opened">
			<template v-for="item in permission_routes" v-if="!item.hidden">
				<template v-if="item.children && item.children.length === 1 && !item.hidden">
					<router-link :to="resolvePath(item.path, item.children[0].path)">
						<el-menu-item :index="resolvePath(item.path, item.children[0].path)" class="">
							{{item.children[0].meta.title}}
						</el-menu-item>
					</router-link>
				</template>
				
				<el-submenu v-else :index="resolvePath(item.path, '')">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span slot="title">{{item.meta.title}}</span>
					</template>
					<template v-for="child in item.children" v-if="!child.hidden">
						<router-link :to="resolvePath(item.path, child.path)">
							<el-menu-item :index="resolvePath(item.path, child.path)" class="">
								{{child.meta.title}}
							</el-menu-item>
						</router-link>
					</template>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script>
	import path from 'path'
	import {mapGetters, mapState} from 'vuex'
	import variables from '@/styles/variables.less'
	import Logo from './Logo'
	
	export default {
		name: "SideBar",
		data() {
			return {
				isCollapse: true,
				childList: null
			}
		},
		components: {
			Logo,
		},
		computed: {
			...mapGetters('permission', [
				'permission_routes'
			]),
			...mapState({
				sidebar: state => state.app.sidebar,
			}),
			variables() {
				return variables
			},
			activeMenu() {
				const route = this.$route
				const {path, meta} = route
				
				if (meta.activeMenu) {
					return meta.activeMenu
				}
				return path
			}
		},
		methods: {
			isExternal(path) {
				return /^(https?:|mailto:|tel:)/.test(path)
			},
			resolvePath(a, b) {
				if (this.isExternal(a)) {
					return a
				}
				if (this.isExternal(b)) {
					return b
				}
				return path.resolve(a, b)
			}
		}
	}
</script>
