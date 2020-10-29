<template>
	<div class="container">
		<div class="pinterestbox" :style="{top: top}"></div>
		<banner :fixHeader="fixHeader"></banner>
		<div class="recommend-line font-bold"><span>为您推荐</span></div>
		<item></item>
		<pinterest></pinterest>
		<div class="recommend-line font-bold"><span>这些机构的设计师也在使用大作</span></div>
		<company></company>
		<site-map></site-map>
		<foot-bottom></foot-bottom>
	</div>
</template>

<script>
	import banner from "@/components/banner.vue";
	import item from "@/views/car_list/item.vue";
	import pinterest from "@/components/pinterest.vue";
	import company from "@/components/company.vue";
	import siteMap from "@/components/site_map.vue";
	import footBottom from "@/components/footer.vue";
	export default {
		data() {
			return {
				fixHeader:false,//判断头部登录
				top: "0px",
			}
		},
		components:{
			banner,
			item,
			pinterest,
			company,
			siteMap,
			footBottom
		},
		methods: {
			listenerFunction(e) {
				document.addEventListener('scroll', this.handleScroll, true);
			},
			handleScroll () {
				if(window.pageYOffset >= 500){
					this.fixHeader = true;
					this.top = "calc(100vh - 75px)";
				}else{
					this.fixHeader = false;
					this.top = "0px";
				}
			}
		},
		mounted() {
			this.listenerFunction();
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
		.recommend-line {
		    height: 92px;
		    width: 100%;
		    display: -ms-flexbox;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    margin-top: 55px;
			&:after, &:before {
			    content: "";
			    width: 40px;
			    height: 1px;
			    border-bottom: 2px solid #ddd;
			}
			span {
			    display: inline-block;
			    font-size: 24px;
			    color: #333;
			    letter-spacing: 2px;
			    line-height: 22px;
			    padding: 0 10px;
			}
		}
		.pinterestbox{
		    height: 75px;
		    background: url(https://xcx.bigbigwork.com/p/images/banner-v-2.png) no-repeat 50% #fff;
		    z-index: 999999;
			display: block;
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			width: 100%;
			cursor: pointer;
		}
	}
</style>
