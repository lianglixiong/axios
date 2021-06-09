/*
* @Author: 010693
* @Date:   2021-04-19 23:17:49
* @Last Modified by:   010693
* @Last Modified time: 2021-04-19 23:22:53
*/
const instance = axios.create({
  baseURL: 'https://api.apishop.net',
  paramsSerializer:function (params) {
  		console.log(Qs.stringify(params, {arrayFormat: 'brackets'}))
        return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
});