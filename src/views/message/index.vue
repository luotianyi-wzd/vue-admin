<template>
	<div class="">
		<div class="container">
			<el-tabs v-model="message">
				<el-tab-pane :label="`未读消息(${unread.length})`" name="first">
					<el-table :data="unread" :show-header="false" style="width: 100%">
						<el-table-column>
							<template slot-scope="scope">
								<span class="message-title">{{ scope.row.title }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="date" width="180"></el-table-column>
						<el-table-column width="120">
							<template slot-scope="scope">
								<el-button type="text" size="small" @click="handleRead(scope.$index)">标为已读</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div class="handle-row">
						<el-button type="primary" :disabled="unread.length === 0" @click="handleRead(-1)">
							全部标为已读
						</el-button>
					</div>
				</el-tab-pane>
				<el-tab-pane :label="`已读消息(${read.length})`" name="second">
					<template v-if="message === 'second'">
						<el-table :data="read" :show-header="false" style="width: 100%">
							<el-table-column>
								<template slot-scope="scope">
									<span class="message-title">{{ scope.row.title }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="date" width="180"></el-table-column>
							<el-table-column width="120">
								<template slot-scope="scope">
									<el-button type="text" @click="handleDel(scope.$index)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="handle-row">
							<el-button type="danger" :disabled="read.length === 0" @click="handleDel(-1)">删除全部</el-button>
						</div>
					</template>
				</el-tab-pane>
				<el-tab-pane :label="`回收站(${recycle.length})`" name="third">
					<template v-if="message === 'third'">
						<el-table :data="recycle" :show-header="false" style="width: 100%">
							<el-table-column>
								<template slot-scope="scope">
									<span class="message-title">{{ scope.row.title }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="date" width="180"></el-table-column>
							<el-table-column width="120">
								<template slot-scope="scope">
									<el-button type="text" @click="handleRestore(scope.$index)">还原</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="handle-row">
							<el-button type="danger" :disabled="recycle.length === 0" @click="handleClear">清空回收站</el-button>
						</div>
					</template>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tabs',
		data() {
			return {
				message: 'first',
				showHeader: false,
				unread: [{
					date: '2018-04-19 20:00:00',
					title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
				}, {
					date: '2018-04-19 21:00:00',
					title: '今晚12点整发大红包，先到先得'
				}],
				read: [{
					date: '2018-04-19 20:00:00',
					title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
				}],
				recycle: [{
					date: '2018-04-19 20:00:00',
					title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
				}]
			}
		},
		computed: {
			unreadNum() {
				return this.unread.length
			}
		},
		methods: {
			handleRead(index) {
				if (index === -1) {
					this.read = this.unread.concat(this.read)
					this.unread = []
				} else {
					const item = this.unread.splice(index, 1)
					this.read = item.concat(this.read)
				}
			},
			handleDel(index) {
				if (index === -1) {
					this.recycle = this.read.concat(this.recycle)
					this.read = []
				} else {
					const item = this.read.splice(index, 1)
					this.recycle = item.concat(this.recycle)
				}
			},
			handleRestore(index) {
				const item = this.recycle.splice(index, 1)
				this.read = item.concat(this.read)
			},
			handleClear() {
				this.recycle = []
			}
		}
	}

</script>

<style>
	.message-title {
		cursor: pointer;
	}

	.handle-row {
		margin-top: 30px;
	}
</style>

