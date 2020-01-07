<template>
	<div class="goods">
		<ul>
			<li v-for="(product, index) in goodsList" :key="index">
				<p>名称：{{ product.name }}</p>
				<p>价格：{{ product.price }}</p>
			</li>
		</ul>
		<button @click="reducePrice">降价</button>
		<button @click="reducePriceAsync">异步降价</button>
	</div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'
	
	export default {
		name: 'Index',
		data() {
			return {
				// goodsList: this.$store.state.goodsList
			}
		},
		computed: {
			/*...mapState([
				'goodsList'
				//'...'多个state
			]),*/
			...mapGetters({
				goodsList: 'getSaledPrice'
			})
			/*goodsList() {
				return this.$store.getters.getSaledPrice
			}*/
		},
		methods: {
			reducePrice() {
				this.$store.commit('reducePrice', 4)
			},
			reducePriceAsync() {
				this.$store.dispatch('reducePriceAsync', 3)
			}
		}
	}
</script>

<style scoped>

</style>
