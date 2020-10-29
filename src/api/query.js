/**
 * @description axios封装js
 * @date 2020-01-08
 * @author mayijun
 */
import axios from 'axios';
axios.defaults.timeout = 30 * 1000; // 超时时间30s

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //配置请求头
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'; //配置请求头

//添加一个请求拦截器
axios.interceptors.request.use(
	(config) => {
		let token = window.localStorage.getItem('token');
		// TODO 第三方接口不加 token 属于测试
		let noToken = config.url.indexOf('/login?') > -1;
		if (token && !noToken) {
			config.headers.common['Authorization'] = token;
		}
		return config;
	}, (error) => {
		return Promise.reject(error);
	}
);

// 添加响应拦截器
axios.interceptors.response.use(
	(response) => {
		if (response.data && response.data.code) {
			// 统一对 code 做一个 number 转换的过程
			let code = Number(response.data.code);
			if (code === 1001) {
				response.data.message = "登录信息已失效，请重新登录";
				//road.$message.error(response.data.msg);//统一消息弹窗
				window.localStorage.removeItem('token');
			}
		}
		return response;
	}, (error) => {
		if (error && error.response && error.response.status === 401) {
			console.log('----token过期---');
			window.localStorage.removeItem('token');
			// window.location.href = '/';
		}
		return Promise.reject(error.response && error.response.data);
	}
);


export default {
	//通用方法
	post: (url, params, config={}) => {
		return axios.post(`${url}?timer=${new Date().getTime()}`, params, config).then(res => res)
	},
	postForm: (url, params) => {
		return axios({
			"url": `${url}?timer=${new Date().getTime()}`, 
			data: params,
			method: 'post',
			transformRequest: [function(data) {
				let ret = ''
				for (let it in data) {
					ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret;
			}],
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(res => res)
	},
	get: (url, params) => {
		params = params || {};
		params['timer'] = new Date().getTime();
		return axios.get(`${url}`, {
			params
		}).then(res => res)
	},

	put: (url, params) => {
		return axios.put(`${url}`, params).then(res => res)
	},

	delete: (url, params) => {
		return axios.delete(`${url}`, {
			params: params
		}).then(res => res)
	},

	patch: (url, params) => {
		return axios.patch(`${url}`, params).then(res => res)
	},
	'$axios': axios
};
