<template>
	<div>
		<el-table
				:data="tableData"
				border
				style="width: 100%; marginBottom: 30px">
			<el-table-column
					prop="date"
					label="日期"
					width="180">
			</el-table-column>
			<el-table-column
					prop="name"
					label="姓名"
					width="180">
			</el-table-column>
			<el-table-column
					prop="address"
					label="地址">
			</el-table-column>
			<el-table-column
					prop="desc"
					label="描述">
			</el-table-column>
			<el-table-column
					label="标签"
					width="100"
				>
				<template slot-scope="scope">
					<el-tag
							:type="scope.row.tag === '家' ? 'primary' : 'success'"
							disable-transitions>{{scope.row.tag}}</el-tag>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination">
			<el-pagination
					background
					layout="prev, pager, next"
					:total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					desc: '这是一段描述',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					desc: '这是一段描述',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					desc: '这是一段描述',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					desc: '这是一段描述',
					tag: '公司'
				}]
			}
		}
	}
</script>

<style lang="less">
	.pagination {
		text-align: right;
	}
</style>
