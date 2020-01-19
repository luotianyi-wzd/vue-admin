<template>
	<div class="icon-page">
		<div>
			<div class="search-box">
				<el-input v-model="keyword" class="search" size="large" clearable placeholder="请输入图标名称"></el-input>
			</div>
			<div class="search-box">
				<p class="desc">(点击复制图标名称)</p>
			</div>
			<ul>
				<li
						v-for="(item,index) in list"
						:key="index"
						class="icon-li"
						:data-clipboard-text="`el-icon-${item}`"
						@click="handleClipboard(item)"
				>
					<div class="icon-li-content">
						<i :class="`el-icon-${item}`"></i>
						<span>{{ item }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import elementIcons from './element-icon'
	import Clipboard from 'clipboard'

	export default {
		data() {
			return {
				keyword: '',
				elementIcons
			}
		},
		computed: {
			list() {
				return this.elementIcons.filter((item) => {
					return item.indexOf(this.keyword) !== -1
				})
			}
		},
		methods: {
			handleClipboard() {
				const clipboard = new Clipboard('.icon-li')
				clipboard.on('success', e => {
					this.$message({
						message: `复制成功: ${e.text}`,
						type: 'success'
					})
					clipboard.destroy()
				})
				clipboard.on('error', (e) => {
					this.$message({
						message: '无法复制',
						type: 'error'
					})
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.icon-page {
		.search-box {
			text-align: center;
			margin-top: 10px;

			.search {
				max-width: 300px;
			}

			.desc {
				font-size: 12px;
				opacity: .4;
			}
		}

		.icon-li {
			display: inline-block;
			padding: 10px;
			width: 120px;
			height: 120px;

			.icon-li-content {
				display: flex;
				height: 100%;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				cursor: pointer;

				i {
					font-size: 36px;
					color: #606266;
				}

				span {
					margin-top: 10px;
					color: #787878;
					text-align: center;
				}
			}
		}
	}
</style>
