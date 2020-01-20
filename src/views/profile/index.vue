<template>
	<div class="profile">
		<el-card class="box-card">
			<div slot="header">
				换肤
			</div>
			<div class="box-item">
				<span>换肤 </span>
				<el-switch v-model="theme"/>
			</div>
		</el-card>
		
		<el-card class="box-card">
			<el-row class="row">
				<el-button>默认按钮</el-button>
				<el-button type="primary">主要按钮</el-button>
				<el-button type="success">成功按钮</el-button>
				<el-button type="info">信息按钮</el-button>
				<el-button type="warning">警告按钮</el-button>
				<el-button type="danger">危险按钮</el-button>
			</el-row>
			
			<el-row class="row">
				<el-button icon="el-icon-search" circle></el-button>
				<el-button type="primary" icon="el-icon-edit" circle></el-button>
				<el-button type="success" icon="el-icon-check" circle></el-button>
				<el-button type="info" icon="el-icon-message" circle></el-button>
				<el-button type="warning" icon="el-icon-star-off" circle></el-button>
				<el-button type="danger" icon="el-icon-delete" circle></el-button>
			</el-row>
		</el-card>
	</div>
</template>

<script>
	import '@/assets/custom-theme/index.css' // the theme changed version element-ui css
	export default {
		name: "index",
		data() {
			return {
				theme: false
			}
		},
		watch: {
			theme() {
				this.toggleClass(document.body, 'custom-theme')
			}
		},
		methods: {
			toggleClass(element, className) {
				if (!element || !className) {
					return
				}
				let classString = element.className
				const nameIndex = classString.indexOf(className)
				if (nameIndex === -1) {
					classString += '' + className
				} else {
					classString =
						classString.substr(0, nameIndex) +
						classString.substr(nameIndex + className.length)
				}
				element.className = classString
			}
		}
	}
</script>

<style scoped lang="less">
	.box-card {
		width: 680px;
	}
	
	.row {
		margin-bottom: 10px;
	}
</style>
