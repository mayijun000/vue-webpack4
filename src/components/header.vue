<template>
	<div class="header" :class="{'fixHeader':fixHeader}">
		<div class="wrap">
			<div class="left-side">
				<div class="dz-logo"></div>
			</div>
			<div class="unlogin-right-side">
				<div class="login btn">登录</div>
				<div class="register btn">注册</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			fixHeader:{
				type: Boolean,
				default:false,
			},
		}
	}
</script>

<style lang="scss" scoped>
	.header {
	    position: fixed;
	    top: 75px;
	    left: 0;
	    right: 0;
	    height: 64px;
	    z-index: 1000;
	    background: 0;
	    box-shadow: none;
	    border: 0;
	    display: flex;
	    transition: top .2s cubic-bezier(.45,.05,.55,.95);
		width: 100%;
		min-width: 1002px;
		.wrap {
		    display: flex;
		    align-items: center;
			justify-content: space-between;
			width: 100%;
			max-width: 1920px;
			margin: 0 auto;
			.left-side{
			    margin-left: 120px;
			    justify-content: center;
				padding-left: 62px;
				display: flex;
				align-items: center;
				.dz-logo{
				    width: 90px;
				    height: 38.4px;
				    background-image: url(//wimg.bigbigwork.com/images/bigworklogowhite.png);
				    background-size: contain;
				    margin: 0 18px;
				    background-repeat: no-repeat;
					cursor: pointer;
				}
			}
			.unlogin-right-side{
			    width: 242px;
			    display: -ms-flexbox;
			    display: flex;
			    justify-content: space-between;
			    align-items: center;
			    margin: 0 120px;
				.login{
				    border: 1px solid #fff;
				}
				.register{
				    border: 1px solid #ff4d4d;
				    background: #ff4d4d;
				}
				.btn {
				    width: 110px;
				    height: 40px;
				    line-height: 40px;
				    border-radius: 2px;
				    font-size: 16px;
				    color: #fff;
				    letter-spacing: 2px;
				    text-align: center;
				    cursor: pointer;
				}
			}
		}
	}
	.fixHeader {
	    background: rgba(25,25,25,.6);
	    box-shadow: 0 1px 0 rgba(0,0,0,.06);
	    height: 75px;
	    top: 0;
	}
</style>
