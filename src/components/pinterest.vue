<template>
	<div class="pinterest-gift-box">
		<div class="left-side">
			<div class="dz-logo"></div> <span>找灵感 就上大作</span>
		</div>
		<div class="right-side"><img src="https://xcx.bigbigwork.com/pimg/pin-text.png " alt="" class="register-desc">
			<div class="register btn">立即注册</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.pinterest-gift-box, .pinterest-gift-box .left-side {
	    display: -ms-flexbox;
	    display: flex;
	    justify-content: center;
	}
	.pinterest-gift-box {
	    width: 90%;
	    height: 160px;
	    margin: 0 auto;
	    margin-top: 10px;
	    background: url(https://xcx.bigbigwork.com/pimg/gift-bg.jpg) no-repeat 50% #fff;
	    background-size: cover;
	    padding: 45px 50px;
	    align-items: center;
	    position: relative;
	    cursor: default;
	    max-width: 1680px;
	    cursor: pointer;
		.left-side {
		    align-items: flex-start;
		    flex-flow: column nowrap;
		    position: absolute;
		    top: 39px;
		    left: 40px;
			.dz-logo {
			    width: 90px;
			    height: 38.4px;
			    background-image: url(//wimg.bigbigwork.com/images/bigworklogowhite.png);
			    background-size: contain;
			    background-repeat: no-repeat;
			}
			span {
			    line-height: 45px;
			    font-size: 20px;
			    color: #fff;
			    font-weight: 300;
			    cursor: pointer;
			}
		}
		.right-side {
		    width: 100%;
		    display: -ms-flexbox;
		    display: flex;
		    justify-content: center;
		    align-items: center;
			img {
			    width: 30%;
			    height: auto;
			}
			.register {
			    border: 1px solid #ff4d4d;
			    background: #ff4d4d;
			}
			.btn {
			    width: 30%;
			    height: 68px;
			    line-height: 68px;
			    border-radius: 2px;
			    font-weight: 600;
			    text-align: center;
			    cursor: pointer;
			    font-size: 24px;
			    color: #fff;
			    letter-spacing: 0;
			    margin-left: 15px;
			}
		}
	}
</style>
