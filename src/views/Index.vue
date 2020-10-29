<template>
	<div class="container">
		<banner></banner>
	</div>
</template>

<script>
	import banner from "@/components/banner.vue";
	export default {
		data() {
			return {}
		},
		components:{
			banner	  
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		min-width: 1136px;
		padding-bottom: 75px;
		overflow-x: hidden;

		span {
			cursor: default;
		}
	}
</style>
