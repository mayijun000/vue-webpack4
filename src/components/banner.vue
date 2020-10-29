<template>
	<div class="banner-box">
		<input type="text" style="position: fixed;top: -1000px"> <input type="password" style="position: fixed;top: -1000px">
		<div class="banner-background">
			<img width="100%" height="100%" src="https://xcx.bigbigwork.com/pimg/bannerbox%402x.jpg" style="object-fit: cover;">
		 </div>
		<div class="banner-search">
			<div class="unlogin-searchtitle"><span>找灵感&nbsp;&nbsp;&nbsp;上大作</span></div>
			<div class="inputInBox">
				<div class="SearchCon">
					<div class="SearchBox-unlogin">
						<div class="tabs">
							<div class="first-tab active"><span>大作搜索</span></div>
							<div class="sec-tab">全球聚合</div>
						</div> <input type="text" spellcheck="false" placeholder="基于人工智能的全球设计灵感搜索平台" autocomplete="off" aria-autocomplete="list"
						 value="" class="user-serach-input font-regular"> <a href="/tupian/?w=" target="_blank"></a>
					</div>
				</div>
				<div class="recommend-search-words font-bold"><span>热门搜索: </span> <a href="/tupian/?w=%E7%8E%BB%E7%92%83%E8%89%BA%E6%9C%AF%E9%9B%95%E5%A1%91"
					 target="_blank" class="word font-regular">玻璃艺术雕塑</a><a href="/tupian/?w=%E6%96%B0%E4%B8%AD%E5%BC%8F%E5%9B%AD%E6%9E%97"
					 target="_blank" class="word font-regular">新中式园林</a><a href="/tupian/?w=%E6%BD%AE%E6%B5%81%E6%8F%92%E7%94%BB"
					 target="_blank" class="word font-regular">潮流插画</a><a href="/tupian/?w=%E5%A4%A7%E5%A0%82" target="_blank" class="word font-regular">大堂</a><a
					 href="/tupian/?w=%E5%A2%A8%E7%BB%BF" target="_blank" class="word font-regular">墨绿</a></div>
			</div>
			<header-top :fixHeader="fixHeader"></header-top>
		</div>
	</div>
</template>

<script>
	import headerTop from "@/components/header.vue";
	export default {
	  data () {
	    return {
	    }
	  },
	  props:{
	  	fixHeader:{
	  		type: Boolean,
	  		default:false,
	  	},
	  },
	  components:{
		  headerTop
	  },
	  methods: {
	    
	  },
	  mounted() {
	
	  }
	}
</script>

<style lang="scss" scoped>
	.banner-box {
	    position: relative;
	    margin-top: 75px;
		.banner-background {
		    position: absolute;
		    display: inline-block;
		    height: 500px;
		    background-image: url(https://xcx.bigbigwork.com/p/images/ssr_home_backg01.png);
		    height: 100%;
		    width: 100%;
		    background-position: center 0;
		    background-repeat: no-repeat;
		    background-size: cover;
		    background-color: #b8b8b8;
		}
		.banner-search{
		    display: -ms-flexbox;
		    display: flex;
		    justify-content: center;
		    align-items: center;
			position: relative;
			width: 100%;
			height: 500px;
			flex-flow: column nowrap;
			.unlogin-searchtitle {
				display: -ms-flexbox;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: default;
				&:after {
				    content: "";
				    width: 80px;
				    height: 1px;
				    border-bottom: 1px solid hsla(0,0%,100%,.94);
				}
				&:before{
				    content: "";
				    width: 80px;
				    height: 1px;
				    border-bottom: 1px solid hsla(0,0%,100%,.94);
				}
				span {
				    display: inline-block;
				    height: 79px;
				    line-height: 79px;
				    font-size: 60px;
				    font-weight: 700;
				    color: #fff;
				    letter-spacing: 3px;
				    padding: 0 12px;
				}
			}
			.inputInBox {
			    display: -ms-flexbox;
			    display: flex;
			    flex-direction: column;
			    justify-content: flex-start;
			    width: 654px;
			    margin-top: 40px;
				.SearchCon {
				    display: -ms-flexbox;
				    display: flex;
				    flex-direction: row;
				    align-items: flex-end;
					.SearchBox-unlogin {
					    margin-bottom: 16px;
					    position: relative;
						.tabs {
						    width: 100%;
						    height: 48px;
						    position: relative;
						    user-select: none;
							.first-tab, .sec-tab {
							    background: #f0f0f0;
							    color: #393939;
							    cursor: pointer;
							    width: 100px;
							    height: 34px;
							    display: inline-block;
							    line-height: 34px;
							    text-align: center;
							    font-size: 14px;
							    position: absolute;
							    top: 0;
							    box-shadow: inset 0 0 0 1px #dedede;
							}
							.first-tab {
							    border-radius: 4px 0 0 4px;
							    left: 0;
							}
							.sec-tab {
							    border-radius: 0 4px 4px 0;
							    background-size: 100% 100%;
							    left: 100px;
							}
							.active {
							    background: #ff4d4d;
							    color: #fff;
							    z-index: 10;
							    box-shadow: none;
								&:after {
								    content: "";
								    display: inline-block;
								    position: absolute;
								    left: 50%;
								    transform: translateX(-50%);
								    bottom: -12px;
								    width: 0;
								    height: 0;
								    border-width: 6px;
								    border-style: solid;
								    border-color: #ff4d4d transparent transparent;
								}
							}
							
						}
						.user-serach-input {
						    width: 654px;
						    height: 48px;
						    background: #fff;
						    border-radius: 4px;
						    padding-left: 18px;
						    font-size: 14px;
						    line-height: 48px!important;
						    color: #303030;
						}
						a {
						    position: absolute;
						    display: block;
						    top: 48px;
						    right: 4px;
						    width: 48px;
						    height: 48px;
						    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAhFBMVEUAAAB1dXV1dXV1dXU/Pz91dXV2dnZ1dXVzc3NycnJ1dXV0dHRzc3NwcHB1dXV2dnZ1dXV1dXV1dXV1dXV1dXVycnJra2t2dnZ1dXV1dXV0dHRycnJubm5hYWF2dnZ1dXV2dnZ1dXV0dHR1dXVzc3N1dXV1dXV1dXV0dHRycnJ2dnZ2dnbQCx/tAAAAK3RSTlMA/PPuA9TPsTAceWA4CefguqKRcVYrEPjHf0kWDAbr2sKEaVs7qJtDMyNO9ZP/CgAAAXtJREFUOMuVk9mWgjAMhgsUUFBWxY1NEJDp+7/fTNNCpKc9x/mvQvK1SUlCPvXoxzay7chLu5mYNfkWQ117qsd2LVPU3DUYveFtqLRUuaPPtHL3CteukTEPwy67LvfHG5LK++xsXt8fRPJkQVA34Us2p8tMeH10vYXnSRT1In+4Oq7IbXWCQL0kv6sZ1JoC+ZXwD+ehA6nHYxEV77PwFGqTTXQo5OalIHq5PJqBOWKFpio9fHNuAl+QD4qEDkwmsGBc0IkLt87EJAvC/wJrbr1MXImp4Z92GgbnwKq4OcAom8AcdgLMDjpYGcAWr5nlLGm1g+AJbFFkfFQZHBhbxkKG/VQUbEJVDJ+9ZnAtaOC6IT8AWif9gLMbelK5NHSbV6xMU6GrdOVq3tH3TpiQfSCofSy9zXN6UFIcchg+HekylEhpIMuBaeQ5SOIbYxVzcrrTkVXofWJxwBduIZU5POeDFzlO7foB3KGSZiHpk+/I5Ei+IGszp5Se/nG/zeJYOqXyMYgAAAAASUVORK5CYII=) 50% no-repeat;
						    cursor: pointer;
						    background-size: 50%;
						}
					}
				}
				.recommend-search-words {
				    width: 100%;
				    color: #fff;
				    font-size: 16px;
				    padding-left: 3px;
					span {
					    margin-right: 10px;
					    user-select: none;
					}
					.word {
					    color: #fff;
						margin-right: 10px;
						user-select: none;
					}
				}
			}
		}
	}
</style>
