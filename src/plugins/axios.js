/*
 * @Author: your name
 * @Date: 2020-04-07 13:45:18
 * @LastEditTime: 2020-04-07 15:26:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weekly\src\plugins\axios.js
 */
"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  //baseURL: process.env.baseURL || process.env.apiUrl || "/api"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 在发送请求之前做些什么
    // console.log(config);
    // config.url = '/api' + config.url;
    if (sessionStorage.getItem('token')) {
      // 将所有页面加上token
      config.headers.common['token'] = token
    };

    // config.headers.common['token']= 123;
    // 将所有页面加上token
    var token = sessionStorage.getItem('token');
    if (token) {
      config.headers.token = token;
    }
    // config.params = {'token': token}
    // config.headers.common['token']= token
    if (
      config.headers &&
      config.headers['Content-Type'] ==
      'application/x-www-form-urlencoded;charset=UTF-8'
    ) {
      let transformRequest = [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }
      ]
      config.transformRequest = transformRequest
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log(response)
    return response;
  },
  function (error) {
    console.log(error)
    // 判断登录状态为403则未登录  拦截所有接口
    if(error.response.status == 403){
      window.location.href='#/login'
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;