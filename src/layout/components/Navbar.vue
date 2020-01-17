<template>
	<div class="navbar">
		<hamburger
			id="hamburger-container"
			:is-active="sidebar.opened"
			class="hamburger-container"
			@toggleClick="toggleSideBar"
		/>
		<breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
		<div class="right-menu">
			<screenfull class="right-menu-item hover-effect" />
			<template>
				<div class="right-menu-item hover-effect">
					<el-tooltip
						effect="dark"
						:content="message?`有${message}条未读消息`:`消息中心`"
						placement="bottom"
					>
						<router-link to="/message/index">
							<i class="el-icon-bell" />
						</router-link>
					</el-tooltip>
					<span v-if="message" class="btn-bell-badge" />
				</div>
			</template>
			<template />
			<el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
				<div class="avatar-wrapper">
					<el-avatar class="user-avatar" icon="el-icon-user-solid" size="small" />
					<p>
						用户名
					</p>
					<i class="el-icon-caret-bottom" />
				</div>
				<el-dropdown-menu slot="dropdown">
					<router-link to="/profile/index">
						<el-dropdown-item>
							个人中心
						</el-dropdown-item>
					</router-link>
					<router-link to="/changePassword">
						<el-dropdown-item>
							修改密码
						</el-dropdown-item>
					</router-link>
					<el-dropdown-item divided>
						<span style="display:block;" @click="logout">退出登录</span>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Hamburger from '@/components/Hamburger'
	import Breadcrumb from '@/components/Breadcrumb'
	import Screenfull from '@/components/Screenfull'

	export default {
	components: {
		Hamburger,
		Breadcrumb,
		Screenfull
	},
	data() {
		return {
			message: 11
		}
	},
		computed: {
			...mapState({
				sidebar: state => state.app.sidebar
			})
		},
		methods: {
			toggleSideBar() {
				this.$store.dispatch('app/toggleSideBar')
			},
			async logout() {
				await this.$store.dispatch('user/logout')
				this.$router.push(`/login?redirect=${this.$route.fullPath}`)
			}
		}
	}
</script>

<style lang="less" scoped>
	.navbar {
		height: 50px;
		overflow: hidden;
		position: relative;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

		.hamburger-container {
			line-height: 46px;
			height: 100%;
			float: left;
			cursor: pointer;
			transition: background .3s;
			-webkit-tap-highlight-color: transparent;

			&:hover {
				background: rgba(0, 0, 0, .025)
			}
		}

		.breadcrumb-container {
			float: left;
		}

		.btn-bell-badge {
			position: absolute;
			right: 4px;
			top: 13px;
			width: 8px;
			height: 8px;
			border-radius: 4px;
			background: #f56c6c;
			color: #fff;
		}

		.errLog-container {
			display: inline-block;
			vertical-align: top;
		}

		.right-menu {
			float: right;
			height: 100%;
			line-height: 50px;

			&:focus {
				outline: none;
			}

			.right-menu-item {
				position: relative;
				display: inline-block;
				padding: 0 8px;
				height: 100%;
				font-size: 18px;
				color: #5a5e66;
				vertical-align: text-bottom;

				&.hover-effect {
					cursor: pointer;
					transition: background .3s;

					&:hover {
						background: rgba(0, 0, 0, .025)
					}
				}
			}

			.avatar-container {
				margin-right: 30px;

				.avatar-wrapper {
					.flexed();
					font-size: 14px;

					.user-avatar {
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
